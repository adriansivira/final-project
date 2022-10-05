import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Card } from "./Components/Cards/Card";
import { pokemonList } from "./Database/Pokemon";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route
            path={"/card/:name"}
            element={<Card pokemonList={pokemonList} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
