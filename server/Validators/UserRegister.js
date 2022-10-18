const { body } = require("express-validator");

exports.userRegister = [
  body("nombre").exists().notEmpty().withMessage("Campo requerido"),
  body("email")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isEmail()
    .withMessage("Inserta un mail válido"),
  body("pwd")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isLength({ min: 5, max: 10 }),
];
