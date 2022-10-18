import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import Modal from "react-modal";
import { SpinnerDotted } from "spinners-react";
import { NewPokemonForm } from "../NewPokemon/NewPokemonForm";
import { FaEdit } from "react-icons/fa";
import "./Card.css";

export const Card = () => {
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

  const { nombre } = useParams();
  const navigate = useNavigate();
  const [datacard, setDatacard] = useState([]);
  const [isloading, setisLoading] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [formErrors, setFormErrors] = useState([]);

  function openEdit() {
    setIsOpen(true);
  }

  function closeEdit() {
    setIsOpen(false);
  }

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

            <h1 className={modalIsOpen ? "pokeId2" : "pokeId"}>
              #{newPokemon.id}
            </h1>
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
            {/* EDIT POKEMON */}
            <div className="edit">
              <button
                className="editButton"
                onClick={openEdit}
                style={{
                  backgroundColor: `${newPokemon.color_primario}`,
                  color: `white`,
                }}
              >
                Editar pokemon
                <FaEdit />
              </button>
              <Modal isOpen={modalIsOpen} onRequestClose={closeEdit}>
                <NewPokemonForm
                  style={{
                    zIndex: 0,
                  }}
                  closeModal={closeEdit}
                  setIsOpen={setIsOpen}
                  isloading={isloading}
                />
                {formErrors
                  ? formErrors.map((err) => (
                      <>
                        <li className="msgerror">{err}</li>
                      </>
                    ))
                  : ""}
              </Modal>
            </div>
            ;{/* ABOUT SECTION */}
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
