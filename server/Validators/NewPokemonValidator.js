const { body } = require("express-validator");

exports.NewPokemonValidator = [
  body("id")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números")
    .isLength({ min: 2, max: 5 })
    .withMessage("ID inválido. Debe contener entre 3 a 5 números"),
  body("nombre").exists().notEmpty().withMessage("Campo requerido"),
  body("img").exists().notEmpty().withMessage("Campo requerido"),
  body("tipo").exists().notEmpty().withMessage("Campo requerido"),
  body("weight")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números"),
  body("heigth")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números"),
  body("moves").exists().notEmpty().withMessage("Campo requerido"),
  body("description").exists().notEmpty().withMessage("Campo requerido"),
  body("hp")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números")
    .isLength({ min: 2, max: 3 })
    .withMessage("El valor debe contener entre 2 a 3 cifras")
    .custom((value, { req }) => {
      if (value < 10 || value > 100) {
        throw new Error("La cifra debe ser mayor a 10 y menor que 100");
      }
      return true;
    }),
  body("atk")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números")
    .isLength({ min: 2, max: 3 })
    .withMessage("El valor debe contener entre 2 a 3 cifras")
    .custom((value, { req }) => {
      if (value < 10 || value > 100) {
        throw new Error(
          "La cifra debe ser mayor o igual a 10 y menor o igual a 100"
        );
      }
      return true;
    }),
  body("def")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números")
    .isLength({ min: 2, max: 3 })
    .withMessage("El valor debe contener entre 2 a 3 cifras")
    .custom((value, { req }) => {
      if (value < 10 || value > 100) {
        throw new Error(
          "La cifra debe ser mayor o igual a 10 y menor o igual a 100"
        );
      }
      return true;
    }),
  body("satk")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números")
    .isLength({ min: 2, max: 3 })
    .withMessage("El valor debe contener entre 2 a 3 cifras")
    .custom((value, { req }) => {
      if (value < 10 || value > 100) {
        throw new Error(
          "La cifra debe ser mayor o igual a 10 y menor o igual a 100"
        );
      }
      return true;
    }),
  body("sdef")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números")
    .isLength({ min: 2, max: 3 })
    .withMessage("El valor debe contener entre 2 a 3 cifras")
    .custom((value, { req }) => {
      if (value < 10 || value > 100) {
        throw new Error(
          "La cifra debe ser mayor o igual a 10 y menor o igual a 100"
        );
      }
      return true;
    }),
  body("spd")
    .exists()
    .notEmpty()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números")
    .isLength({ min: 2, max: 3 })
    .withMessage("El valor debe contener entre 2 a 3 cifras")
    .custom((value, { req }) => {
      if (value < 10 || value > 100) {
        throw new Error(
          "La cifra debe ser mayor o igual a 10 y menor o igual a 100"
        );
      }
      return true;
    }),
  body("color_primario").exists().notEmpty().withMessage("Campo requerido"),
];
