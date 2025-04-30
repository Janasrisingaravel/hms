import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './doctorpage.css'; // Reuse your existing styles

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Header with Toggle Button */}
      <div className="header">
        <button className="hamburger-btn" onClick={toggleSidebar}>☰</button>
        <h1 className="dash-title">Doctor's Dashboard</h1>

        {/* Image below the dashboard title */}
        <img 
          src="https://wallpaperaccess.com/full/3750058.jpg" 
          alt="Doctor Dashboard Banner" 
          style={{
            width: "100%",
            height: "1200px",
            marginTop: "100px",
            borderRadius: "10px"
          }}
        />
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="sidebar">
          <h2>HMS</h2>
          <ul className="sidebar-menu">
            <li><a href="#">📊 Dashboard</a></li>
            <li><Link to="/appointment-history">📜 Appointment History</Link></li>
            <li><Link to="/medical-history">🩺 Medical History</Link></li>             
            <li><Link to="/my-profile">👤 My Profile</Link></li>
          </ul>

          {/* Logout Button */}
          <button 
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "80%",
              alignSelf: "center"
            }}
            onClick={() => window.location.href = "/"}
          >
            🚪 Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
