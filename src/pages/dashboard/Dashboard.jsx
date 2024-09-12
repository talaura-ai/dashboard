import React from "react";
import "./Dashboard.css"; // Create a separate CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Top Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button className="logout-button">Logout</button>
      </header>

      {/* Sidebar Navigation */}
      <nav className="dashboard-sidebar">
        <ul className="sidebar-menu">
          <li className="menu-item">Organisation</li>
          <li className="menu-item">Profile</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">
        <div className="table-container">
          <h2>Main Content Area</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Organisation</th>
                <th>Email</th>
                <th>Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Talaura</td>
                <td>Talaura@example.com</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Talaura</td>
                <td>Talaura@example.com</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Talaura</td>
                <td>Talaura@example.com</td>
                <td>Admin</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
