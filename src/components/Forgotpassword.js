import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import './Forgotpassword.css';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !newPassword || !confirmPassword) {
      alert('Please fill out all fields!');
    } else if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      alert(`Password reset successful for: ${email}`);
      navigate('/'); // Redirect to Home or Login page after submission
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-box">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="back-btn"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
