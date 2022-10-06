import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (name, email, password) => {
    fetch(`http://localhost:8000/login`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(function (response) {
        if (response.success) {
          localStorage.setItem("auth-token", response.auth_token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <>
      <h1>Bienvenido a Pokedex</h1>
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
        <button
          className="loginButton"
          onClick={(e) => login(name, email, password)}
        >
          Log in
        </button>
      </form>
    </>
  );
}
