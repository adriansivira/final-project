import React from "react";
import { useNavigate } from "react-router-dom";
import "./box.css";

export const PokemonBox = ({ nombre, id, img, color_primario }) => {
  const navigate = useNavigate();
  return (
    <article
      onClick={() => navigate(`/card/${nombre}`)}
      className="box"
      style={{ backgroundColor: `${color_primario}` }}
    >
      <div className="header-box">
        <div className="idBox">
          <p style={{ color: `${color_primario}` }}>#{id}</p>
        </div>
        <img src={nombre} />
      </div>
      <div className="box-title">
        <h3>{img}</h3>
      </div>
    </article>
  );
};
