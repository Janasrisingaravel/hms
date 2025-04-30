import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function AdminLogin() {
  const navigate = useNavigate();
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
      setFormData({ username: '', password: '' });
      setShowPassword(false);
      navigate('/admin-dashboard');  // Go to Admin Dashboard
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Admin Login</h2>
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
            {/* Update the link to go to the Forgot Password page */}
            <a href="#" onClick={() => navigate('/forgot-password')}>Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => navigate(-1)} // Go back to the previous page
            className="back-btn"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
