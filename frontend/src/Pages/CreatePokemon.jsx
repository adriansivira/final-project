import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export function CreatePokemon() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [type, setType] = useState(["", ""]);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [move1, setMove1] = useState("");
  const [move2, setMove2] = useState("");
  const [moves, setMoves] = useState(["", ""]);
  const [description, setDescription] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [satk, setSatk] = useState("");
  const [sdef, setSdef] = useState("");
  const [spd, setSpd] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");

  const fetchForm = () => {
    fetch(`http://localhost:8000/pokemones`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
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

  const backgroundColor = [
    { name: "Rock", color: "#B69E31" },
    { name: "Ghost", color: "#70559B" },
    { name: "Steel", color: "#B7B9D0" },
    { name: "Water", color: "#6493EB" },
    { name: "Grass", color: "#74CB48" },
    { name: "Psychic", color: "#FB5584" },
    { name: "Normal", color: "#AAA67F" },
    { name: "Flying", color: "#A891EC" },
    { name: "Poison", color: "#A43E9E" },
    { name: "Bug", color: "#A7B723" },
    { name: "Fire", color: "#F57D31" },
    { name: "Electric", color: "#F9CF30" },
  ];

  const setTypeAndColor1 = (e) => {
    let type = e.target.value;
    setType1(type);
    let colorType = backgroundColor.find((item) => item.name === type);
    setPrimaryColor(colorType.color);
    setType([type1, type2]);
  };

  const setTypeAndColor2 = (e) => {
    let type = e.target.value;
    setType2(type);
    let colorType = backgroundColor.find((item) => item.name === type);
    setSecondaryColor(colorType.color);
    setType([type1, type2]);
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

        <div>
          <p>Enter type 1</p>
          <select onChange={setTypeAndColor1}>
            <option value=""></option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Steel">Steel</option>
            <option value="Water">Water</option>
            <option value="Grass">Grass</option>
            <option value="Psychic">Psychic</option>
            <option value="Normal">Normal</option>
            <option value="Flying">Flying</option>
            <option value="Poison">Poison</option>
            <option value="Bug">Bug</option>
            <option value="Fire">Fire</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        <div>
          <p>Enter type 2</p>
          <select onChange={setTypeAndColor2}>
            <option value=""></option>
            <option value="Rock">Rock</option>
            <option value="Ghost">Ghost</option>
            <option value="Steel">Steel</option>
            <option value="Water">Water</option>
            <option value="Grass">Grass</option>
            <option value="Psychic">Psychic</option>
            <option value="Normal">Normal</option>
            <option value="Flying">Flying</option>
            <option value="Poison">Poison</option>
            <option value="Bug">Bug</option>
            <option value="Fire">Fire</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

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

        <div>
          <p>Select move 1</p>
          <select onChange={setMove1}>
            <option value=""></option>
            <option value="Sturdy">Sturdy</option>
            <option value="Rock-Head">Ghost</option>
            <option value="Mega-Punch">Steel</option>
            <option value="Fire-Punch">Water</option>
            <option value="Chlorophyll">Grass</option>
            <option value="Overgrow">Psychic</option>
            <option value="Torrent">Normal</option>
            <option value="Rain-Dish">Flying</option>
            <option value="Limber">Poison</option>
            <option value="Imposter">Bug</option>
            <option value="Compund-Eyes">Fire</option>
            <option value="Levitate">Electric</option>
            <option value="Electric">Electric</option>
            <option value="Psychic">Electric</option>
          </select>
        </div>

        <div>
          <p>Select move 2</p>
          <select onChange={setMove2}>
            <option value=""></option>
            <option value="Sturdy">Sturdy</option>
            <option value="Rock-Head">Ghost</option>
            <option value="Mega-Punch">Steel</option>
            <option value="Fire-Punch">Water</option>
            <option value="Chlorophyll">Grass</option>
            <option value="Overgrow">Psychic</option>
            <option value="Torrent">Normal</option>
            <option value="Rain-Dish">Flying</option>
            <option value="Limber">Poison</option>
            <option value="Imposter">Bug</option>
            <option value="Compund-Eyes">Fire</option>
            <option value="Levitate">Electric</option>
            <option value="Electric">Electric</option>
            <option value="Psychic">Electric</option>
          </select>
        </div>

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

        <button onClick={fetchForm}>Save changes & add Pokemon</button>
      </div>
    </>
  );
}
