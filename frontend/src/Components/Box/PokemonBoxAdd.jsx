import React from "react";
import "../Box/box.css";

export const PokemonBoxAdd = () => {
  return (
    <article className="boxAdd">
      <div className="boxImage">
        <img
          className="imageSize"
          // src="./Imagenes/Recursos/questionImage.png"
        />
      </div>
      <div className="boxText">
        <h3>Agregar</h3>
      </div>
    </article>
  );
};
