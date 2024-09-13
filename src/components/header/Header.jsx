import React from "react";

const Header = ({ setShowLogoutPopup }) => {
  return (
    <header className="dashboard-header">
      <h1 className="dashboard-title">Dashboard</h1>
      <button
        className="logout-button"
        onClick={() => setShowLogoutPopup(true)}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
