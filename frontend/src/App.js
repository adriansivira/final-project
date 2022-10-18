import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Card } from "./Components/Cards/Card";
import { Home } from "../src/Pages/Home";
import { Login } from "../src/Pages/Login";
import { Register } from "../src/Pages/Register";
import { CreatePokemon } from "./Components/NewPokemon/CreatePokemon";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/createPokemon" element={<CreatePokemon />}></Route>
          <Route path={"/card/:nombre"} element={<Card />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
