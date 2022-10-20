import React from "react";
import { useState } from "react";
import { SpinnerDotted } from "spinners-react";
import "./form.css";
import "../Box/box.css";

export const NewPokemonForm = ({
  closeModal,
  setId,
  setName,
  setImg,
  setType1,
  setType2,
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
  secondaryColor,
  setWeight,
  setHeight,
  setMove1,
  setMove2,
  setDescription,
  setHp,
  setAtk,
  setDef,
  setSatk,
  setSdef,
  setSpd,
  setPrimaryColor,
  setSecondaryColor,
}) => {
  console.log("el name es:", name);
  return (
    <>
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
            value={id}
          ></input>
        </div>
        <div className="name">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter the name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>

        <div className="url">
          <p>Image</p>
          <input
            className="imageSize"
            type="text"
            placeholder="Paste the URL of the image"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          ></input>
        </div>

        <div className="type1">
          <p>Type 1</p>
          <input
            type="text"
            placeholder="Enter the type 1"
            onChange={(e) => setType1(e.target.value)}
            value={type1}
          ></input>
        </div>

        <div className="type2">
          <p>Type 2</p>
          <input
            type="text"
            placeholder="Enter the type 2"
            onChange={(e) => setType2(e.target.value)}
            value={type2}
          ></input>
        </div>

        <div className="weightInput">
          <p>Weight</p>
          <input
            type="text"
            placeholder="Enter the weight"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
          ></input>
        </div>

        <div className="heightInput">
          <p>Height</p>
          <input
            type="text"
            placeholder="Enter the Heigth"
            onChange={(e) => setHeight(e.target.value)}
            value={height}
          ></input>
        </div>

        <div className="move1">
          <p>Move 1</p>
          <input
            type="text"
            placeholder="Enter the move 1"
            onChange={(e) => setMove1(e.target.value)}
            value={move1}
          ></input>
        </div>

        <div className="move2">
          <p>Move 2</p>
          <input
            type="text"
            placeholder="Enter the move 2"
            onChange={(e) => setMove2(e.target.value)}
            value={move2}
          ></input>
        </div>

        <div className="description">
          <p>Description</p>
          <input
            type="text"
            placeholder="Enter a description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></input>
        </div>

        <div className="hp">
          <p>Hp</p>
          <input
            type="text"
            placeholder="Enter the hp value"
            onChange={(e) => setHp(e.target.value)}
            value={hp}
          ></input>
        </div>

        <div className="atk">
          <p>Atk</p>
          <input
            type="text"
            placeholder="Enter the atk value"
            onChange={(e) => setAtk(e.target.value)}
            value={atk}
          ></input>
        </div>

        <div className="def">
          <p>Def</p>
          <input
            type="text"
            placeholder="Enter the def value"
            onChange={(e) => setDef(e.target.value)}
            value={def}
          ></input>
        </div>

        <div className="satk">
          <p>Satk</p>
          <input
            type="text"
            placeholder="Enter the satk value"
            onChange={(e) => setSatk(e.target.value)}
            value={satk}
          ></input>
        </div>

        <div className="sdef">
          <p>Sdef</p>
          <input
            type="text"
            placeholder="Enter the sdef value"
            onChange={(e) => setSdef(e.target.value)}
            value={sdef}
          ></input>
        </div>

        <div className="spd">
          <p>Spd</p>
          <input
            type="text"
            placeholder="Enter the spd value"
            onChange={(e) => setSpd(e.target.value)}
            value={spd}
          ></input>
        </div>

        <div className="primaryColor">
          <p>Primary Color</p>
          <input
            type="text"
            placeholder="Enter the primary color"
            onChange={(e) => setPrimaryColor(e.target.value)}
            value={primaryColor}
          ></input>
        </div>

        <div className="secondaryColor">
          <p>Secondary Color</p>
          <input
            type="text"
            placeholder="Enter the secondary color"
            onChange={(e) => setSecondaryColor(e.target.value)}
            value={secondaryColor}
          ></input>
        </div>
      </div>
    </>
  );
};
