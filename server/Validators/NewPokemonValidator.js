const { body, check } = require("express-validator");

exports.NewPokemonValidator = [
  body("id")
    .exists()
    .withMessage("Campo requerido")
    .isNumeric()
    .withMessage("El valor debe contener solo números")
    .isLength({ min: 2, max: 4 })
    .withMessage("ID inválido. Debe contener entre 3 a 5 números"),
  //   body("nombre").exists().notEmpty().withMessage("Campo requerido"),
  //   body("img").exists().notEmpty().withMessage("Campo requerido"),
  //   body("tipo").exists().notEmpty().withMessage("Campo requerido"),
  //   body("weight")
  //     .exists()
  //     .notEmpty()
  //     .withMessage("Campo requerido")
  //     .isNumeric()
  //     .withMessage("El valor debe contener solo números"),
  //   body("heigth")
  //     .exists()
  //     .notEmpty()
  //     .withMessage("Campo requerido")
  //     .isNumeric()
  //     .withMessage("El valor debe contener solo números"),
  //   body("moves").exists().notEmpty().withMessage("Campo requerido"),
  //   body("description").exists().notEmpty().withMessage("Campo requerido"),
  //   body("hp")
  //     .exists()
  //     .notEmpty()
  //     .withMessage("Campo requerido")
  //     .isNumeric()
  //     .withMessage("El valor debe contener solo números")
  //     .isLength({ min: 3, max: 3 })
  //     .withMessage("El valor debe contener tres números y comenzar en 0"),
  //   body("atk")
  //     .exists()
  //     .notEmpty()
  //     .withMessage("Campo requerido")
  //     .isNumeric()
  //     .withMessage("El valor debe contener solo números")
  //     .isLength({ min: 3, max: 3 })
  //     .withMessage("El valor debe contener tres números y comenzar en 0"),
  //   body("def")
  //     .exists()
  //     .notEmpty()
  //     .withMessage("Campo requerido")
  //     .isNumeric()
  //     .withMessage("El valor debe contener solo números")
  //     .isLength({ min: 3, max: 3 })
  //     .withMessage("El valor debe contener tres números y comenzar en 0"),
  //   body("satk")
  //     .exists()
  //     .notEmpty()
  //     .withMessage("Campo requerido")
  //     .isNumeric()
  //     .withMessage("El valor debe contener solo números")
  //     .isLength({ min: 3, max: 3 })
  //     .withMessage("El valor debe contener tres números y comenzar en 0"),
  //   body("sdef")
  //     .exists()
  //     .notEmpty()
  //     .withMessage("Campo requerido")
  //     .isNumeric()
  //     .withMessage("El valor debe contener solo números")
  //     .isLength({ min: 3, max: 3 })
  //     .withMessage("El valor debe contener tres números y comenzar en 0"),
  //   body("spd")
  //     .exists()
  //     .notEmpty()
  //     .withMessage("Campo requerido")
  //     .isNumeric()
  //     .withMessage("El valor debe contener solo números")
  //     .isLength({ min: 3, max: 3 })
  //     .withMessage("El valor debe contener tres números y comenzar en 0"),
  //   body("color_primario").exists().notEmpty().withMessage("Campo requerido"),
];
