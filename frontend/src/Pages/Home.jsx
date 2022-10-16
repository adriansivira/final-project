import { useEffect, useState } from "react";
import "../App.css";
import { PokemonBox } from "../Components/Box/PokemonBox";
import { SpinnerDotted } from "spinners-react";
import { CreatePokemon } from "../Components/NewPokemon/CreatePokemon";

export const Home = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState(true);
  const [orderArrow, setorderArrow] = useState(true);
  const [chosenList, setChosenList] = useState(data);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);

  let search; //Variable que captura el texto del input
  let filteredList; //Variable que devuelve la lista según la búsqueda

  const sortingAlphaListMayor = (a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/pokemones", {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        setData([...response].sort(sortingAlphaListMayor));
        setChosenList([...response].sort(sortingAlphaListMayor));
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => alert(err));
  }, [time]);

  useEffect(() => {
    if (order && orderArrow) {
      setChosenList([...data].sort(sortingAlphaListMayor));
    }
    if (order && !orderArrow) {
      const sortingAlphaListMinor = (a, b) => {
        if (a.nombre < b.nombre) {
          return 1;
        }
        if (a.nombre > b.nombre) {
          return -1;
        }
      };

      setChosenList([...data].sort(sortingAlphaListMinor));
    }
    if (!order && orderArrow) {
      const sortingNumListMayor = (a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
      };

      setChosenList([...data].sort(sortingNumListMayor));
    }
    if (!order && !orderArrow) {
      const sortingNumListMinor = (a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      };

      setChosenList([...data].sort(sortingNumListMinor));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, orderArrow]);

  const handleSearch = (e) => {
    search = e.target.value;
    filteredList = data.filter((poke) => {
      return poke.nombre.match(search);
    });
    if (search.length === 0) {
      setChosenList(data);
    } else {
      setChosenList([...filteredList]);
    }
  };

  const handleOrder = () => {
    setOrder(!order);
  };

  const handleArrowOrder = () => {
    setorderArrow(!orderArrow);
  };

  return (
    <div className="container">
      <header>
        <img alt="Hola" src="./Imagenes/Recursos/Pokeball.png" />
        <h1>Pokédex</h1>
        <div className="newpokButton">
          <CreatePokemon setTime={setTime} />
        </div>

        <section className="order arrow">
          {order ? (
            <p onClick={handleOrder}>Aa</p>
          ) : (
            <p onClick={handleOrder}>#</p>
          )}
          {orderArrow ? (
            <img
              alt="Hola"
              onClick={handleArrowOrder}
              src="./Imagenes/Recursos/down-arrow.png"
            />
          ) : (
            <img
              alt="Hola"
              onClick={handleArrowOrder}
              src="./Imagenes/Recursos/up-arrow.png"
            />
          )}
        </section>
      </header>
      <input type="search" placeholder="Buscar" onChange={handleSearch} />
      <div className={!loading ? "App" : "loading"}>
        {!loading === true ? (
          chosenList.map((poke) => (
            <PokemonBox
              nombre={poke.nombre}
              id={poke.id}
              img={poke.img}
              color_primario={poke.color_primario}
            />
          ))
        ) : (
          <div className="spinnerhome">
            <SpinnerDotted />
          </div>
        )}
      </div>
    </div>
  );
};
