import React, { useState, useRef } from "react";

const PatientProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "9876543210",
    age: "30",
    gender: "Male",
  });

  const fileInputRef = useRef(null);

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    alert("Profile saved successfully!");
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Patient Profile</h2>
      <div style={cardStyle}>
        {/* Profile Image Section */}
        <div style={imageSectionStyle}>
          <img
            src={
              profileImage ||
              "https://media.istockphoto.com/photos/portrait-of-a-beautifull-smiling-man-picture-id500060262?k=6&m=500060262&s=612x612&w=0&h=dqPFs-C5bejj3tCI_pZFctS5xOHUtipA1FHPUU6aAwU="
            }
            alt="Profile"
            style={imageStyle}
          />
          <button onClick={handleEditClick} style={editButtonStyle}>
            {profileImage ? "Edit Photo" : "Upload Photo"}
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>

        {/* Form Section */}
        <div style={formStyle}>
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Age", name: "age", type: "number" },
          ].map(({ label, name, type }) => (
            <div key={name} style={inputGroup}>
              <label style={labelStyle}>{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          ))}

          <div style={inputGroup}>
            <label style={labelStyle}>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button onClick={handleSave} style={saveButton}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: "50px 20px",
  backgroundColor: "#f7f9fc",
  fontFamily: "Segoe UI, sans-serif",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#2c3e50",
};

const cardStyle = {
  display: "flex",
  flexWrap: "wrap",
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  maxWidth: "900px",
  margin: "0 auto",
  gap: "40px",
  alignItems: "flex-start",
};

const imageSectionStyle = {
  textAlign: "center",
};

const imageStyle = {
  width: "160px",
  height: "160px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid #3498db",
  marginBottom: "12px",
};

const editButtonStyle = {
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "10px 18px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
};

const formStyle = {
  flex: 1,
  minWidth: "250px",
};

const inputGroup = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
};

const labelStyle = {
  marginBottom: "6px",
  fontWeight: "bold",
  color: "#34495e",
};

const inputStyle = {
  padding: "10px 12px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none",
};

const saveButton = {
  backgroundColor: "#2c3e50",
  color: "#fff",
  padding: "6px 12px",
  fontSize: "14px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  width: "120px", 
}


export default PatientProfile;
