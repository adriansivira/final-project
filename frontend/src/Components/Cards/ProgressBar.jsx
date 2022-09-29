import React from "react";

export const ProgressBar = ({ value, newPokemon, text, className }) => {
  return (
    <div>
      <span>
        <div>{text}</div>
        <progress className={className} value={value} max="100"></progress>
      </span>
    </div>
  );
};
