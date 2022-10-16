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
    .select("email", "pwd", "id")
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
              process.env.JWT_PRIVATE_KEY
            ),
          });
        }
        if (req.body.pwd !== rows[0].pwd) {
          res.status(404).json({ msg: "password incorrecto" });
        }
      }
      if (req.body.email === "") {
        res.status(404).json({ msg: "Llena el campo Email" });
      }
      if (req.body.pwd === "") {
        res.status(404).json({ msg: "Introduce una constraseña" });
      } else {
        res.status(404).json({ msg: "Email o contraseña incorrecta" });
      }
    })
    .catch((err) => {
      res.status(500);
    })
    .finally(() => {
      next();
    });
});

module.exports = router;
