import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Card.css";
import { ProgressBar } from "./ProgressBar";
import { SpinnerDotted } from "spinners-react";

export const Card = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const [datacard, setDatacard] = useState([]);
  const [isloading, setisLoading] = useState(false);

  // Hacer usestate para capturar los datos desde el fetch

  useEffect(() => {
    setisLoading(true);
    fetch("http://localhost:8000/pokemoncard/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setDatacard(result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setTimeout(() => {
          setisLoading(false);
        }, 1000);
      });
  }, []);

  let index;

  let newPokemon;

  datacard.map((poke, i) => {
    if (poke.nombre === nombre) {
      newPokemon = poke;
      index = i;
    }
  });

  const x = undefined;

  const a = true;
  const resultado = a && x;

  return (
    <>
      {isloading && (
        <div className="spinner">
          <SpinnerDotted />
        </div>
      )}
      {newPokemon && !isloading && (
        <div
          style={{ backgroundColor: `${newPokemon.color_primario}` }}
          className="card"
        >
          {/* PROFILE HEADER */}
          <div className="pokeHeader">
            <div className="name_arrow">
              <img
                onClick={() => navigate("/home")}
                src="/Imagenes/Recursos/arrow_back.png"
              />
              <h1>{newPokemon.nombre}</h1>
            </div>
            <h1>#{newPokemon.id}</h1>
          </div>
          {/* POKEMON IMAGE AND ARROW */}
          <img className="pokeballImg" src="/Imagenes/Recursos/Pokeball.png" />
          <div className="pokeImgSection">
            {/* LEFT ARROW */}
            <Link
              to={`/card/${
                datacard[index - 1]
                  ? datacard[index - 1].nombre
                  : datacard[datacard.length - 1].nombre
              } `}
            >
              <img
                className="leftArrow"
                src="/Imagenes/Recursos/back.png"
                alt=""
              />
            </Link>

            <img className="pokemonImg" src={newPokemon.img} alt="" />
            {/* RIGTH ARROW */}
            <Link
              to={`/card/${
                datacard[index + 1]
                  ? datacard[index + 1].nombre
                  : datacard[0].nombre
              } `}
            >
              <img
                className="nextArrow"
                src="/Imagenes/Recursos/next.png"
                alt=""
              />
            </Link>
          </div>
          {/* EL WHITE BOX */}
          <div className="whiteBox">
            {/* POKEMON TYPE*/}
            <div className="types">
              {newPokemon.tipo.map((ty, i) => (
                <p
                  style={
                    i === 0
                      ? { backgroundColor: `${newPokemon.color_primario}` }
                      : { backgroundColor: `${newPokemon.color_secundario}` }
                  }
                >
                  {ty}
                </p>
              ))}
            </div>
            {/* ABOUT SECTION */}
            <h2
              className="aboutTitle"
              style={{ color: `${newPokemon.color_primario}` }}
            >
              About
            </h2>
            <section className="about">
              <div className="weight">
                <div>
                  <img src="/Imagenes/Recursos/Weight.svg" />
                  <p>{newPokemon.weight} kg</p>
                </div>
                <span>Weight</span>
              </div>
              <div className="height">
                <div>
                  <img src="/Imagenes/Recursos/Height.svg" />
                  <p>{newPokemon.heigth} m</p>
                </div>
                <span>Height</span>
              </div>
              <div className="moves">
                <div>
                  <p className="movesTitle">{newPokemon.moves[0]}</p>
                  <p className="movesTitle">{newPokemon.moves[1]}</p>
                </div>
                <span>Moves</span>
              </div>
            </section>
            <p>{newPokemon.description}</p>
            {/* STATS SECTION */}
            <h2 style={{ color: `${newPokemon.color_primario}` }}>
              Base Stats
            </h2>
            <section className="baseStats">
              <div className="statName">
                <span style={{ color: `${newPokemon.color_primario}` }}>
                  HP
                </span>
                <span style={{ color: `${newPokemon.color_primario}` }}>
                  ATK
                </span>
                <span style={{ color: `${newPokemon.color_primario}` }}>
                  DEF
                </span>
                <span style={{ color: `${newPokemon.color_primario}` }}>
                  SATK
                </span>
                <span style={{ color: `${newPokemon.color_primario}` }}>
                  SDEF
                </span>
                <span style={{ color: `${newPokemon.color_primario}` }}>
                  SPD
                </span>
              </div>
              <div className="statValue">
                <ProgressBar
                  text={newPokemon.hp}
                  value={newPokemon.hp}
                  className={`statProgress ${newPokemon.nombre} `}
                />
                <ProgressBar
                  text={newPokemon.atk}
                  value={newPokemon.atk}
                  className={`statProgress ${newPokemon.nombre} `}
                />
                <ProgressBar
                  text={newPokemon.def}
                  value={newPokemon.def}
                  className={`statProgress ${newPokemon.nombre} `}
                />
                <ProgressBar
                  text={newPokemon.satk}
                  value={newPokemon.satk}
                  className={`statProgress ${newPokemon.nombre} `}
                />
                <ProgressBar
                  text={newPokemon.sdef}
                  value={newPokemon.sdef}
                  className={`statProgress ${newPokemon.nombre} `}
                />
                <ProgressBar
                  text={newPokemon.spd}
                  value={newPokemon.spd}
                  className={`statProgress ${newPokemon.nombre} `}
                />
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
