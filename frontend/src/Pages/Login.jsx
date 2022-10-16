import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import "../App.css";

export function Login() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setisLoading] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const navigate = useNavigate();

  const login = (email, password) => {
    let myHeaders = new Headers();
    myHeaders.append("auth-token", "");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
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
    fetch("http://localhost:8000/user/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          localStorage.setItem("auth-token", result.auth_token);
          setTimeout(() => {
            setisLoading(false);
            navigate("/home");
          }, 1000);
        } else {
          seterrorMsg(result.msg);
          setisLoading(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="loginPage">
      <div className="loginTitle">
        <h1>Bienvenido a Pokedex</h1>
      </div>
      <div className="backgroundLogin">
        <form className="login">
          {errorMsg ? <p>{errorMsg}</p> : ""}
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
                  login(mail, password);
                  seterrorMsg("");
                }}
              >
                Log in
              </button>
            </div>
          )}
        </form>
        <div className="buttonregister">
          <h3>¿No tienes usuario?</h3>
          <button className="regButton">Registrarse</button>
        </div>
      </div>
    </div>
  );
}
