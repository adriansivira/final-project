import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import "../App.css";

export function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const login = (name, email, password) => {
    let myHeaders = new Headers();
    myHeaders.append("auth-token", "");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      nombre: name,
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
        }
        console.log(result);
        setTimeout(() => {
          setisLoading(false);
          navigate("/home");
        }, 1000);
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
          <div className="loginName">
            <label for="fname">Name</label>
            <input
              type="text"
              id="text"
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
                  login(name, email, password);
                }}
              >
                Log in
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
