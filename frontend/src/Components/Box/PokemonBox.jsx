import React from "react";
import { useNavigate } from "react-router-dom";
import "./box.css";

export const PokemonBox = ({ name, id, img, primary_color }) => {
  const navigate = useNavigate();
  return (
    <article
      onClick={() => navigate(`/card/${name}`)}
      className="box"
      style={{ backgroundColor: `${primary_color}` }}
    >
      <div className="header-box">
        <div className="idBox">
          <p style={{ color: `${primary_color}` }}>#{id}</p>
        </div>
        <img src={img} />
      </div>
      <div className="box-title">
        <h3>{name}</h3>
      </div>
    </article>
  );
};
