import React from "react";

export const Login = () => {
  return (
    <>
      <h1>Bienvenido a Pokedex</h1>
      <button className="mainButton" type="button">
        Iniciar sesión
      </button>
      <form className="login">
        <div className="loginName">
          <label for="fname">Name</label>
          <input type="text" />
        </div>
        <div className="loginMail">
          <label for="">Email</label>
          <input type="email" />
        </div>
        <div className="loginPassword">
          <label for="password">Contraseña</label>
          <input type="password" />
        </div>
        <button className="loginButton" type="button">
          Entrar
        </button>
      </form>
    </>
  );
};
