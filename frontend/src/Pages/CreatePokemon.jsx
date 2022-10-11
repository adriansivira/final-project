import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export function CreatePokemon() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [type, setType] = useState([]);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [moves, setMoves] = useState([]);
  const [description, setDescription] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [satk, setSatk] = useState("");
  const [sdef, setSdef] = useState("");
  const [spd, setSpd] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");

  let type1;
  let type2;
  let move1;
  let move2;

  const fetchForm = (
    id,
    img,
    nombre,
    tipo,
    weight,
    height,
    moves,
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
    fetch(`http://localhost:8000/pokemones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: id,
        img: img,
        nombre: nombre,
        tipo: tipo,
        weight: weight,
        height: height,
        moves: moves,
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

  const setTypeAndColor1 = (e) => {
    type1 = e.target.value;
    setType(type1);
  };

  const setTypeAndColor2 = (e) => {
    type2 = e.target.value;
    setType(type2);
  };

  const setMove1 = (e) => {
    move1 = e.target.value;
    setMoves(move1);
  };

  const setMove2 = (e) => {
    move2 = e.target.value;
    setMoves(move2);
  };

  return (
    <>
      <div className="pokeHeader">
        <div className="name_arrow">
          <img
            onClick={() => navigate("/home")}
            src="/Imagenes/Recursos/arrow_back.png"
          />
        </div>
      </div>

      <div className="newPokemon">
        <h1 className="">Add a new Pokemon</h1>
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
          onChange={(e) => setTypeAndColor1(e.target.value)}
        ></input>

        <p>Select type 2</p>
        <input
          type="text"
          id="type2"
          placeholder="Enter the type 2"
          onChange={(e) => setTypeAndColor2(e.target.value)}
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
              type,
              weight,
              height,
              moves,
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
    </>
  );
}
