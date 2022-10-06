import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (name, email, password) => {
    // fetch("http://localhost:8000/user/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     nombre: name,
    //     email: email,
    //     pwd: password,
    //   }),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((response) => {
    //     if (response.success) {
    //       localStorage.setItem("auth-token", response.auth_token);
    //       navigate("/home");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err);
    //   });

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

    fetch("http://localhost:8000/user/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if (result.success) {
          localStorage.setItem("auth-token", result.auth_token);
        }
        console.log(result);
        debugger;
        navigate("/home");
        debugger;
      })
      .catch((error) => console.log("error", error));
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
