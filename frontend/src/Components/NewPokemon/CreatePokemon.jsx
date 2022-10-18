import React, { useState } from "react";
import Modal from "react-modal";
import { NewPokemonForm } from "./NewPokemonForm";
import "./form.css";

export function CreatePokemon({ setTime }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    setIsLoading(true);
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
        if (responseJSON.errors) {
          setIsLoading(false);
          setFormErrors(responseJSON.errors);
          console.log(responseJSON.errors);
        } else {
          setTime(Date.now());
          setTimeout(() => {
            setIsLoading(false);
            setIsOpen(false);
            setFormErrors([]);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modalBox">
      <div
        className={modalIsOpen ? "newPokemon" : "newpokButton"}
        onClick={openModal}
      >
        <button>Agregar nuevo Pokemon</button>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <NewPokemonForm
          closeModal={closeModal}
          fetchForm={fetchForm}
          setIsOpen={setIsOpen}
          isloading={isloading}
        />
        {formErrors
          ? formErrors.map((err) => (
              <>
                <li className="msgerror">{err}</li>
              </>
            ))
          : ""}
      </Modal>
    </div>
  );
}
