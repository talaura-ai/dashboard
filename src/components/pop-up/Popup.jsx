import React from "react";

const Popup = ({ children, className }) => {
  return (
    <div
      className={`w-2/5 px-5 py-4 rounded shadow-md fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Popup;
