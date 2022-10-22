import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import "../App.css";

export function Register() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isloading, setisLoading] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const navigate = useNavigate();

  const register = (nombre, email, password) => {
    let myHeaders = new Headers();
    myHeaders.append("auth-token", "");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      nombre: nombre,
      email: email,
      pwd: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    setisLoading(true);
    fetch("http://localhost:8000/user/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.errors) {
          setisLoading(false);
          seterrorMsg(result.errors);
        }
        if (!result.errors) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
        setisLoading(false);
      })
      .catch((error) => alert("error", error));
  };

  return (
    <div className="loginPage">
      <div className="loginTitle">
        <h1>Bienvenido a Pokedex</h1>
      </div>
      <div className="backgroundLogin">
        <form className="login">
          {errorMsg
            ? errorMsg.map((err) => (
                <>
                  <li className="msgerror">{err}</li>
                </>
              ))
            : ""}

          <div className="nameRegister">
            <label for="password">Nombre</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="loginMail">
            <label for="">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="loginPassword">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {isloading ? (
            <div>
              <SpinnerDotted />
            </div>
          ) : (
            <div className="divButton">
              <button
                className="loginButton"
                onClick={(e) => {
                  e.preventDefault();
                  register(name, mail, password);
                }}
              >
                Registrarse
              </button>
            </div>
          )}
        </form>
        <div className="goToLogin">
          <h3>
            <Link to="/">¿Ya tienes usuario?</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
