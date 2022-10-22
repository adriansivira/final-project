import React from "react";
import "./error.css";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="conterror">
      <div className="errortext">
        <h1 style={{ padding: 20 }}>NO HAY NADA POR ACÁ. ANDÁTE</h1>
      </div>
      <button
        className="botonerr"
        onClick={(e) => {
          navigate("/home");
        }}
      >
        Andá a la home
      </button>
    </div>
  );
};
