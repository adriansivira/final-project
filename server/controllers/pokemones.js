const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin12345",
    database: "pokemonesfinal",
  },
});

exports.todospokemones = (req, res, next) => {
  knex
    .select("nombre", "id", "img", "color_primario")
    .from("pokemonlist")
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
    .from("pokemonlist")

    .then((result) => {
      res.json(result);
      next();
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
      next();
    });
};
