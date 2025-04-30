import React from "react";
import { useNavigate } from "react-router-dom";

const PatientPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/"); // Go to homepage when logout
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#2c3e50",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Patient Panel</h2>
        <button
          style={buttonStyle}
          onClick={() => handleNavigation("/patient/profile")}
        >
          My Profile
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleNavigation("/patient/book-appointment")}
        >
          Book Appointment
        </button>
        <button
          style={buttonStyle}
          onClick={() => handleNavigation("/patient/medical-history")}
        >
          Medical History
        </button>

        {/* Logout Button */}
        <button
          style={{ ...buttonStyle, marginTop: "auto", backgroundColor: "#e74c3c" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px" }}>
        <h1>Welcome to Patient Dashboard</h1>
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
          Hope you're doing well today. Stay healthy and safe!
        </p>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: "#34495e",
  color: "white",
  padding: "10px 20px",
  marginBottom: "15px",
  border: "none",
  textAlign: "left",
  cursor: "pointer",
  fontSize: "16px",
  borderRadius: "5px",
};

export default PatientPage;
