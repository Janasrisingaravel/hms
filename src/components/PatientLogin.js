import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import './styles.css';

function PatientLogin() {
  const navigate = useNavigate(); // ✅ Add this

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      alert('Please fill in all fields!');
    } else {
      alert(`Logged in as: ${formData.username}`);
      navigate('/patient'); // 
      
      // ✅ Clear the form inputs after login
      setFormData({ username: '', password: '' });
      setShowPassword(false);
    }
  };
  

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Patient Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="checkbox-row">
            <input
              type="checkbox"
              id="showPass"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPass">Show Password</label>
          </div>

          <div className="links">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => navigate(-1)}  // 👈 Goes back to previous page
            className="back-btn"
          >
            Back
          </button>        </form>
      </div>
    </div>
  );
}

export default PatientLogin;
