import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import './AdminDashboard.css'; // we'll style it nicely here

function AdminPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin-login');
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
  <li><Link to="/admin-dashboard">Dashboard</Link></li>
  <li><Link to="/admin/department">Department</Link></li>
  <li><Link to="/admin/patient">Patient</Link></li>
  <li><Link to="/admin/doctor">Doctor</Link></li>
  <li><Link to="/admin/nurse">Nurse</Link></li>
  <li><Link to="/admin/employees">Employees</Link></li>
  <li><Link to="/admin/surgerytheatre">Surgery Theatre</Link></li>
  <li><Link to="/admin/appointment-history">Appointment History</Link></li>

</ul>

        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      
      <div className="main-content">
        <h1>Welcome, Admin!</h1>
        <p>Select an option from the sidebar to manage the hospital system.</p>
      </div>
    </div>
  );
}

export default AdminPage;
