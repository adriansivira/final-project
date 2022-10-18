const router = require("express").Router();
const { validationResult } = require("express-validator");

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
const bcrypt = require("bcrypt");

// REGISTER

router.post("/register", (req, res, next) => {
  // FORMATO DE RETURERROR VALIDATOR EXPRESS

  const errorFormatter = ({ msg, param, value }) => {
    return `[${param}]: ${msg}`;
  };
  const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
    return res.json({ errors: result.array() });
  }

  const salt = bcrypt.genSaltSync(10);
  const pwd = bcrypt.hashSync(req.body.pwd, salt);
  knex("usuarios")
    .returning(["id", "email"])
    .insert({
      nombre: req.body.nombre,
      email: req.body.email,
      pwd: pwd,
    })
    .then((re) => {
      res.status(201).json(re[0]);
      next();
    })
    .catch((err) => {
      res.status(500).send("Error");
      console.log(err);
      next();
    });
});

// LOGIN

router.post("/login", (req, res, next) => {
  knex
    .select("email", "pwd", "id")
    .from("usuarios")
    .where("email", req.body.email)
    .then((rows) => {
      if (rows.length === 1) {
        if (bcrypt.compareSync(req.body.pwd, rows[0].pwd)) {
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
