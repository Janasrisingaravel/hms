import React, { useState } from "react";
import "./MyProfile.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const initialProfile = {
  name: "Dr. Ramesh Kumar",
  specialty: "Neurologist",
  experience: "15 years",
  phone: "+91-9876543210",
  email: "dr.ramesh@example.com",
  address: "1234 Health Street, City, Country",
  bio: "Dr. Ramesh Kumar is an experienced neurologist with over 15 years of expertise in diagnosing and treating various neurological disorders. He is passionate about providing top-notch care to his patients and continuously stays updated with the latest advancements in neurology.",
  profilePicture: "https://leman-clinic.ch/wp-content/uploads/2018/11/02.jpg"
};

const MyProfile = () => {
  const [doctorProfile, setDoctorProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialProfile);

  const handleEditClick = () => {
    setFormData(doctorProfile);
    setIsEditing(true);
  };

  const handleLogoutClick = () => {
    sessionStorage.clear();
    alert("Logged out successfully!");
    window.location.href = "/login"; // Replace with your login route
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    setDoctorProfile(formData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-banner" />

        <div className="profile-header">
          <img
            src={doctorProfile.profilePicture}
            alt="Doctor Profile"
            className="profile-picture"
          />
          <div className="profile-header-info">
            <h3>{doctorProfile.name}</h3>
            <p>{doctorProfile.specialty}</p>
            <p><strong>Experience:</strong> {doctorProfile.experience}</p>
            <p><strong>Member Since:</strong> January 2020</p>
          </div>
        </div>

        <div className="profile-body">
          <h4>Contact Information:</h4>
          <div className="contact-info">
            <div><strong><MdEmail /> Email:</strong></div>
            <div>{doctorProfile.email}</div>

            <div><strong><MdPhone /> Phone:</strong></div>
            <div>{doctorProfile.phone}</div>

            <div><strong><MdLocationOn /> Address:</strong></div>
            <div>{doctorProfile.address}</div>
          </div>

          <h4>Bio:</h4>
          <p>{doctorProfile.bio}</p>
        </div>

        <div className="profile-divider"></div>

        <div className="profile-footer">
          <button className="footer-button small-button" onClick={handleEditClick}>
            Edit
          </button>
          <button className="footer-button small-button" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h3>Edit Profile</h3>
            <label>Name:</label>
            <input name="name" value={formData.name} onChange={handleInputChange} />

            <label>Email:</label>
            <input name="email" value={formData.email} onChange={handleInputChange} />

            <label>Phone:</label>
            <input name="phone" value={formData.phone} onChange={handleInputChange} />

            <label>Address:</label>
            <input name="address" value={formData.address} onChange={handleInputChange} />

            <label>Bio:</label>
            <textarea name="bio" value={formData.bio} onChange={handleInputChange} />

            <div className="modal-buttons">
              <button onClick={handleSaveChanges}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
