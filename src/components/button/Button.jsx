import React from "react";
import "./button.css";

const Button = ({ type, onClick, title, className }) => {
  return (
    <button
      className={`button ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
