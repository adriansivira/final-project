import React, { useState } from "react";
import Modal from "react-modal";
import { NewPokemonForm } from "./NewPokemonForm";
import "./form.css";
import { SpinnerDotted } from "spinners-react";

export function CreatePokemon({ setTime }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [move1, setMove1] = useState("");
  const [move2, setMove2] = useState("");
  const [description, setDescription] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [satk, setSatk] = useState("");
  const [sdef, setSdef] = useState("");
  const [spd, setSpd] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");

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
          setId={setId}
          setName={setName}
          setImg={setImg}
          setType1={setType1}
          setType2={setType2}
          setWeight={setWeight}
          setHeight={setHeight}
          setMove1={setMove1}
          setMove2={setMove2}
          setDescription={setDescription}
          setHp={setHp}
          setAtk={setAtk}
          setDef={setDef}
          setSatk={setSatk}
          setSdef={setSdef}
          setSpd={setSpd}
          setPrimaryColor={setPrimaryColor}
          setSecondaryColor={setSecondaryColor}
        />
        {isloading ? (
          <div className="spinner">
            <SpinnerDotted />
          </div>
        ) : (
          <button
            className="saveButton"
            onClick={(e) => {
              fetchForm(
                id,
                img,
                name,
                type1,
                type2,
                weight,
                height,
                move1,
                move2,
                description,
                hp,
                atk,
                def,
                satk,
                sdef,
                spd,
                primaryColor,
                secondaryColor
              );
            }}
          >
            Save changes & add Pokemon
          </button>
        )}
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
