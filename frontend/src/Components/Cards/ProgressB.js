import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export const ProgressB = ({ value, color, text, className }) => {
  return (
    <div>
      <span>
        <div style={{ width: 40 }}>{text}</div>
        <ProgressBar
          bgColor={color}
          labelColor={color}
          className={className}
          completed={value}
        />
      </span>
    </div>
  );
};
