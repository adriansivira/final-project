import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Card } from "./Components/Cards/Card";
import { pokemonList } from "./Database/Pokemon";
import { Home } from "../src/Pages/Home";
import { Login } from "../src/Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path={"/card/:nombre"}
            element={<Card pokemonList={pokemonList} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
