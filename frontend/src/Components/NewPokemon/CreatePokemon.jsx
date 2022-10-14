import React, { useState } from "react";
import Modal from "react-modal";
import { PokemonBoxAdd } from "../Box/PokemonBoxAdd";
import { NewPokemonForm } from "./NewPokemonForm";
import "./form.css";

export function CreatePokemon({ setTime }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const fetchForm = (
    id,
    img,
    nombre,
    type1,
    type2,
    weight,
    heigth,
    move1,
    move2,
    description,
    hp,
    atk,
    def,
    satk,
    sdef,
    spd,
    color_primario,
    color_secundario
  ) => {
    fetch("http://localhost:8000/pokemones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: id,
        img: img,
        nombre: nombre,
        tipo: [type1, type2],
        weight: weight,
        heigth: heigth,
        moves: [move1, move2],
        description: description,
        hp: hp,
        atk: atk,
        def: def,
        satk: satk,
        sdef: sdef,
        spd: spd,
        color_primario: color_primario,
        color_secundario: color_secundario,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then(function (responseJSON) {
        if (responseJSON.success) {
          localStorage.setItem("auth-token", responseJSON.auth_token);
        }
        setTime(Date.now());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modalBox">
      <div className="newPokemon" onClick={openModal}>
        <PokemonBoxAdd />
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <NewPokemonForm
          closeModal={closeModal}
          fetchForm={fetchForm}
          setIsOpen={setIsOpen}
        />
      </Modal>
    </div>
  );
}
