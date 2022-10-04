const { response, request } = require("express");
const express = require("express");
const pokeController = require("./controllers/pokemones");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Acá todo el asunto del cors

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// ENDPOINTS

app.get("/pokemones", pokeController.todospokemones);

app.listen(8000, () => {
  console.log("Escuchando en el puerto 8000");
});
