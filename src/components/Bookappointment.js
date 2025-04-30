import React, { useState } from "react";

const BookAppointment = () => {
  const [doctor, setDoctor] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [consultancyFees, setConsultancyFees] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [issues, setIssues] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [contactNumber, setContactNumber] = useState(""); // <-- added contact number

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!profilePhoto) {
      alert("Please upload your profile photo.");
      return;
    }

    // You can send this data to backend here
    alert(`Appointment booked with Dr. ${doctor} (${specialization}) on ${date} at ${time}.
    Consultancy Fees: ₹${consultancyFees}
    Patient Issues: ${issues}
    Contact Number: ${contactNumber}`);

    // Reset form
    setDoctor("");
    setSpecialization("");
    setConsultancyFees("");
    setDate("");
    setTime("");
    setIssues("");
    setProfilePhoto(null);
    setContactNumber(""); // reset contact number too
  };

  const handleDoctorChange = (e) => {
    const selectedDoctor = e.target.value;
    setDoctor(selectedDoctor);

    if (selectedDoctor === "John Doe") {
      setSpecialization("Cardiologist");
      setConsultancyFees("500");
    } else if (selectedDoctor === "Jane Smith") {
      setSpecialization("Dermatologist");
      setConsultancyFees("400");
    } else if (selectedDoctor === "Alan Walker") {
      setSpecialization("Neurologist");
      setConsultancyFees("600");
    } else {
      setSpecialization("");
      setConsultancyFees("");
    }
  };

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>Book an Appointment</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        
        {/* Upload Profile Photo */}
        <label style={labelStyle}>Upload Profile Photo:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} style={inputStyle} required />

        {/* Contact Number */}
        <label style={labelStyle}>Contact Number:</label>
        <input
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
          pattern="[0-9]{10}"
          placeholder="Enter 10-digit number"
          style={inputStyle}
        />

        {/* Doctor Selection */}
        <label style={labelStyle}>Select Doctor:</label>
        <select
          value={doctor}
          onChange={handleDoctorChange}
          required
          style={inputStyle}
        >
          <option value="">-- Choose a Doctor --</option>
          <option value="John Doe">Dr. John Doe</option>
          <option value="Jane Smith">Dr. Jane Smith</option>
          <option value="Alan Walker">Dr. Alan Walker</option>
        </select>

        {/* Doctor Specialization */}
        <label style={labelStyle}>Doctor Specialization:</label>
        <input
          type="text"
          value={specialization}
          readOnly
          style={{ ...inputStyle, backgroundColor: "#f1f1f1" }}
        />

        {/* Consultancy Fees */}
        <label style={labelStyle}>Consultancy Fees (₹):</label>
        <input
          type="text"
          value={consultancyFees}
          readOnly
          style={{ ...inputStyle, backgroundColor: "#f1f1f1" }}
        />

        {/* Patient Issues */}
        <label style={labelStyle}>Mention Your Issues:</label>
        <textarea
          value={issues}
          onChange={(e) => setIssues(e.target.value)}
          required
          rows="4"
          style={{ ...inputStyle, resize: "vertical" }}
        />

        {/* Date Picker */}
        <label style={labelStyle}>Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={inputStyle}
        />

        {/* Time Picker */}
        <label style={labelStyle}>Select Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={inputStyle}
        />

        {/* Submit Button */}
        <button type="submit" style={buttonStyle}>
          Book Appointment
        </button>
      </form>
    </div>
  );
};

// Styles
const labelStyle = {
  marginBottom: "8px",
  marginTop: "20px",
  fontWeight: "bold",
  color: "#333",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  marginTop: "30px",
  padding: "12px",
  fontSize: "18px",
  backgroundColor: "#2ecc71",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default BookAppointment;
