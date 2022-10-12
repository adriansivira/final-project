const router = require("express").Router();

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

const jwt = require("jsonwebtoken");

router.post("/login", (req, res, next) => {
  knex
    .select("email", "pwd", "id", "nombre")
    .from("usuarios")
    .where("email", req.body.email)
    .then((rows) => {
      if (rows.length === 1) {
        if (req.body.pwd == rows[0].pwd) {
          res.status(200).json({
            msg: "logueado",
            success: true,
            auth_token: jwt.sign(
              {
                id: rows[0].id,
                email: rows[0].email,
                random_text: "la concha del mono tibetano",
              },
              JWT_PRIVATE_KEY
            ),
          });
        } else {
          res.status(404).json({ msg: "mail o password incorrecto" });
        }
      } else {
        res.status(404).json({ msg: "mail o password incorrecto" });
      }
    })
    .catch((err) => {
      res.status(500).send("Error");
      console.log(err);
    })
    .finally(() => {
      next();
    });
});

module.exports = router;
