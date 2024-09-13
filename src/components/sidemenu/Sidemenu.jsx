import React from "react";
import Button from "../button/Button";

const Sidemenu = () => {
  return (
    <nav className="dashboard-sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item">Organisation</li>
        <li className="menu-item">Profile</li>
      </ul>
    </nav>
  );
};

export default Sidemenu;
