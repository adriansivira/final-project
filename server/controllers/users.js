const router = require("express").Router();

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Admin2022",
    database: "FinalProject",
  },
});

const jwt = require("jsonwebtoken");
const { SECRET } = require("../middlewares/jwt");

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
              SECRET
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
