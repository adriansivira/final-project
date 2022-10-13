import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { PokemonBoxAdd } from "../Components/Box/PokemonBoxAdd";
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

  return (
    <div className="modalBox">
      <div className="newPokemon" onClick={openModal}>
        <PokemonBoxAdd />
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="buttonContainer">
          <button className="closeButton" onClick={closeModal}>
            Close
          </button>
        </div>

        <h1 className="modalTitle">Add a new Pokemon</h1>
        <div className="newPokemon">
          <div className="id">
            <p>Id</p>
            <input
              type="id"
              placeholder="Enter an id number"
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>

          <div className="name">
            <p>Name</p>
            <input
              type="text"
              placeholder="Enter the name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="url">
            <p>Image</p>
            <input
              type="text"
              placeholder="Paste the URL of the image"
              onChange={(e) => setImg(e.target.value)}
            ></input>
          </div>

          <div className="type1">
            <p>Type 1</p>
            <input
              type="text"
              placeholder="Enter the type 1"
              onChange={(e) => setType1(e.target.value)}
            ></input>
          </div>

          <div className="type2">
            <p>Type 2</p>
            <input
              type="text"
              placeholder="Enter the type 2"
              onChange={(e) => setType2(e.target.value)}
            ></input>
          </div>

          <div className="weightInput">
            <p>Weight</p>
            <input
              type="text"
              placeholder="Enter the weight"
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>

          <div className="heightInput">
            <p>Height</p>
            <input
              type="text"
              placeholder="Enter the Heigth"
              onChange={(e) => setHeight(e.target.value)}
            ></input>
          </div>

          <div className="move1">
            <p>Move 1</p>
            <input
              type="text"
              placeholder="Enter the move 1"
              onChange={(e) => setMove1(e.target.value)}
            ></input>
          </div>

          <div className="move2">
            <p>Move 2</p>
            <input
              type="text"
              placeholder="Enter the move 2"
              onChange={(e) => setMove2(e.target.value)}
            ></input>
          </div>

          <div className="description">
            <p>Description</p>
            <input
              type="text"
              placeholder="Enter a description"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>

          <div className="hp">
            <p>Hp</p>
            <input
              type="text"
              placeholder="Enter the hp value"
              onChange={(e) => setHp(e.target.value)}
            ></input>
          </div>

          <div className="atk">
            <p>Atk</p>
            <input
              type="text"
              placeholder="Enter the atk value"
              onChange={(e) => setAtk(e.target.value)}
            ></input>
          </div>

          <div className="def">
            <p>Def</p>
            <input
              type="text"
              placeholder="Enter the def value"
              onChange={(e) => setDef(e.target.value)}
            ></input>
          </div>

          <div className="satk">
            <p>Satk</p>
            <input
              type="text"
              placeholder="Enter the satk value"
              onChange={(e) => setSatk(e.target.value)}
            ></input>
          </div>

          <div className="sdef">
            <p>Sdef</p>
            <input
              type="text"
              placeholder="Enter the sdef value"
              onChange={(e) => setSdef(e.target.value)}
            ></input>
          </div>

          <div className="spd">
            <p>Spd</p>
            <input
              type="text"
              placeholder="Enter the spd value"
              onChange={(e) => setSpd(e.target.value)}
            ></input>
          </div>

          <div className="primaryColor">
            <p>Primary Color</p>
            <input
              type="text"
              placeholder="Enter the primary color"
              onChange={(e) => setPrimaryColor(e.target.value)}
            ></input>
          </div>

          <div className="secondaryColor">
            <p>Secondary Color</p>
            <input
              type="text"
              placeholder="Enter the secondary color"
              onChange={(e) => setSecondaryColor(e.target.value)}
            ></input>
          </div>

          <button
            className="saveButton"
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
    </div>
  );
}
