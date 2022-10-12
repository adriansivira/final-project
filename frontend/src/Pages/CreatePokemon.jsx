import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { PokemonBoxAdd } from "../Components/Box/PokemonBoxAdd";
import { SpinnerDotted } from "spinners-react";
import "../App.css";

export function CreatePokemon() {
  const navigate = useNavigate();
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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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
          setTimeout(() => {
            setLoading(true);
          }, 1000);
          navigate("/home");
        }
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

  const modalStyles = {
    content: {
      top: "100%",
      left: "auto",
      right: "auto",
      bottom: "auto",
      transform: "translate(-20%, -20%)",
    },
  };

  return (
    <>
      <div className="newPokemon" onClick={openModal}>
        <PokemonBoxAdd />
      </div>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <button onClick={closeModal}>close</button>

        <h1 className="">Add a new Pokemon</h1>
        <div className="back">
          <button onClick={() => navigate("/home")}>Back to home</button>
        </div>

        <div className="newPokemon">
          <input
            type="id"
            id="id"
            placeholder="Enter an id number"
            onChange={(e) => setId(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the name"
            onChange={(e) => setName(e.target.value)}
          ></input>

          <input
            type="text"
            id="url"
            placeholder="Paste the URL of the new Pokemon"
            onChange={(e) => setImg(e.target.value)}
          ></input>

          <p>Select type 1</p>
          <input
            type="text"
            id="type1"
            placeholder="Enter the move 1"
            onChange={(e) => setType1(e.target.value)}
          ></input>

          <p>Select type 2</p>
          <input
            type="text"
            id="type2"
            placeholder="Enter the type 2"
            onChange={(e) => setType2(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the weight"
            onChange={(e) => setWeight(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the Heigth"
            onChange={(e) => setHeight(e.target.value)}
          ></input>

          <p>Select move 1</p>
          <input
            type="text"
            id="move1"
            placeholder="Enter the move 1"
            onChange={(e) => setMove1(e.target.value)}
          ></input>

          <p>Select move 2</p>
          <input
            type="text"
            id="move2"
            placeholder="Enter the move 2"
            onChange={(e) => setMove2(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter a description"
            onChange={(e) => setDescription(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the hp value"
            onChange={(e) => setHp(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the atk value"
            onChange={(e) => setAtk(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the def value"
            onChange={(e) => setDef(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the satk value"
            onChange={(e) => setSatk(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the sdef value"
            onChange={(e) => setSdef(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the spd value"
            onChange={(e) => setSpd(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the primary color"
            onChange={(e) => setPrimaryColor(e.target.value)}
          ></input>

          <input
            type="text"
            id="id"
            placeholder="Enter the secondary color"
            onChange={(e) => setSecondaryColor(e.target.value)}
          ></input>

          <button
            onClick={(e) =>
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
              )
            }
          >
            Save changes & add Pokemon
          </button>
        </div>
      </Modal>
    </>
  );
}
