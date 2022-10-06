exports.SECRET = "otravezlaconchadelmonotibetano";

const jwt = require("jsonwebtoken");

exports.validateJWT = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    res.status(403).json({ msg: "no token found" });
  }

  // aqui se valida el token
  jwt.verify(token, exports.SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ msg: "invalid token" });
    }
    console.log(decoded);

    // const tiempo = decoded.iat;
    // var ahora = new Date();
    // var tokenDate = new Date(tiempo * 1000);
    // var dif = (ahora.getTime() - tokenDate.getTime()) / 1000;
    // if (dif > 800000000) {
    //   return res.status(403).json({ msg: "expired token" });
    // }
    req.usuario = decoded.mail;
    console.log("TOKEN VALIDADO");
    next();
  });
};
