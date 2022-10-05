import { useEffect, useState } from "react";
import "../App.css";
import { PokemonBox } from "../Components/Box/PokemonBox";
// import { pokemonList } from "../Database/Pokemon";

export const Home = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState(true);
  const [orderArrow, setorderArrow] = useState(true);
  const [chosenList, setChosenList] = useState(data);
  const [filter, setFilter] = useState(data);

  let search; //Variable que captura el texto del input
  let filteredList; //Variable que devuelve la lista según la búsqueda

  useEffect(() => {
    fetch("http://localhost:8000/pokemones", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((err) => alert(err));

    if (order && orderArrow) {
      const sortingAlphaListMayor = (a, b) => {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
      };

      setChosenList([...chosenList].sort(sortingAlphaListMayor));
      setFilter([...filter].sort(sortingAlphaListMayor));
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

      setChosenList([...chosenList].sort(sortingAlphaListMinor));
      setFilter([...filter].sort(sortingAlphaListMinor));
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

      setChosenList([...chosenList].sort(sortingNumListMayor));
      setFilter([...filter].sort(sortingNumListMayor));
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

      setChosenList([...chosenList].sort(sortingNumListMinor));
      setFilter([...filter].sort(sortingNumListMinor));
    }
  }, [order, orderArrow]);

  const handleSearch = (e) => {
    search = e.target.value;
    filteredList = chosenList.filter((poke) => {
      return poke.nombre.match(search);
    });
    if (search.length === 0) {
      setChosenList(filter);
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
        <img src="./Imagenes/Recursos/Pokeball.png" />
        <h1>Pokédex</h1>
        <section className="order arrow">
          {order ? (
            <p onClick={handleOrder}>Aa</p>
          ) : (
            <p onClick={handleOrder}>#</p>
          )}
          {orderArrow ? (
            <img
              onClick={handleArrowOrder}
              src="./Imagenes/Recursos/down-arrow.png"
            />
          ) : (
            <img
              onClick={handleArrowOrder}
              src="./Imagenes/Recursos/up-arrow.png"
            />
          )}
        </section>
      </header>
      <input type="search" placeholder="Buscar" onChange={handleSearch} />
      <div className="App">
        {/* {chosenList.map((poke) => (
          <PokemonBox
            nombre={poke.nombre}
            id={poke.id}
            img={poke.img}
            color_primario={poke.color_primario}
          />
        ))} */}
        <p>{data.nombre}</p>
      </div>
    </div>
  );
};
