import React from "react";
import "./input.css";

const Input = ({ placeholder, type, value, onChange, required, name }) => {
  return (
    <input
      placeholder={placeholder}
      className="input-style"
      type={type || "text"}
      onChange={onChange}
      value={value}
      name={name}
      required={required || true}
    />
  );
};

export default Input;
