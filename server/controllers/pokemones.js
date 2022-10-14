require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
});

exports.todospokemones = (req, res, next) => {
  knex
    .select("nombre", "id", "img", "color_primario")
    .from("pokemones")
    .then((result) => {
      res.json(result);
      next();
    });
};

exports.pokemoncard = (req, res, next) => {
  const nombre = req.params.nombre;
  knex
    // .where("nombre", nombre)
    .select("*")
    .from("pokemones")

    .then((result) => {
      res.json(result);
      next();
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
      next();
    });
};

exports.newpokemon = (req, res, next) => {
  const r = req.body;
  knex("pokemones")
    .returning("*")
    .insert({
      id: r.id,
      img: r.img,
      nombre: r.nombre,
      tipo: [r.tipo[0], r.tipo[1]],
      weight: r.weight,
      heigth: r.heigth,
      moves: [r.moves[0], r.moves[1]],
      description: r.description,
      hp: r.hp,
      atk: r.atk,
      def: r.def,
      satk: r.satk,
      sdef: r.sdef,
      spd: r.spd,
      color_primario: r.color_primario,
      color_secundario: r.color_secundario,
    })
    .then((result) => {
      res.status(201).json(result[0]);
      console.log(result);
      next();
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
      console.log(err);
      next();
    });
};
