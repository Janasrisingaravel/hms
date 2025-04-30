import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';
import './footer.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Top Navigation Bar */}
      <div className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/contacts" className="nav-item">Contacts</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="home-content">
        <div>
          <h1 className="home-title">Hospital Management System</h1>
        </div>
        <p className="home-subtitle">Select your role to login:</p>

        <div className="card-container">
          <div className="login-card">
            <img 
              src="/images/admin.jpeg" 
              alt="Admin" 
              className="card-image"
            />
            <h3>Admin</h3>
            <p>Manage hospital and staff settings</p>
            <button onClick={() => navigate('/admin-login')}>Login as Admin</button>
          </div>

          <div className="login-card">
            <img 
              src="/images/doctor.jpeg"
              alt="Doctor" 
              className="card-image"
            />
            <h3>Doctor</h3>
            <p>View appointments and patient details</p>
            <button onClick={() => navigate('/doctor-login')}>Login as Doctor</button>
          </div>

          <div className="login-card">
            <img 
              src="/images/patient.webp" 
              alt="Patient" 
              className="card-image"
            />
            <h3>Patient</h3>
            <p>Access reports and prescriptions</p>
            <button onClick={() => navigate('/patient-login')}>Login as Patient</button>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-links">
            <Link to="/about" className="footer-item">About Us</Link>
            <Link to="/privacy-policy" className="footer-item">Privacy Policy</Link> {/* Ensure this link works */}
            <Link to="/faq" className="footer-item">Frequently Asked Questions</Link>
            <Link to="/terms-conditions" className="footer-item">Terms and Conditions</Link>
          </div>
          <p>&copy; 2025 Hospital Management System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
