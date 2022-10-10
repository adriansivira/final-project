import React from "react";
import "../../App.css";

export const PokemonBoxAdd = () => {
  return (
    <article
      className="boxAdd"
      style={{ backgroundImage: "./Imagenes/Recursos/background.png" }}
    >
      <div className="boxImage">
        <img src="./Imagenes/Recursos/questionImage.png" />
      </div>
      <div className="boxText">
        <h3>Agregar</h3>
      </div>
    </article>
  );
};
