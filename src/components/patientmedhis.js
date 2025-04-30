import React from "react";

const MedicalHistory = () => {
  // Sample data
  const medicalHistoryData = [
    {
      date: "2025-04-10",
      doctor: "Dr. John Doe",
      purpose: "Regular Checkup",
      diagnosis: "Hypertension",
      surgery: "None",
      medications: "Amlodipine 5mg daily",
    },
    {
      date: "2025-03-22",
      doctor: "Dr. Jane Smith",
      purpose: "Skin Rash",
      diagnosis: "Eczema",
      surgery: "None",
      medications: "Hydrocortisone cream",
    },
    {
      date: "2024-12-15",
      doctor: "Dr. Alan Walker",
      purpose: "Severe Headache",
      diagnosis: "Migraine",
      surgery: "Appendix Surgery (2019)",
      medications: "Sumatriptan as needed",
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>Medical History</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#3498db", color: "white" }}>
            <th style={thTdStyle}>Date</th>
            <th style={thTdStyle}>Doctor</th>
            <th style={thTdStyle}>Purpose</th>
            <th style={thTdStyle}>Diagnosis</th>
            <th style={thTdStyle}>Surgery</th>
            <th style={thTdStyle}>Medications</th>
          </tr>
        </thead>
        <tbody>
          {medicalHistoryData.map((record, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white" }}>
              <td style={thTdStyle}>{record.date}</td>
              <td style={thTdStyle}>{record.doctor}</td>
              <td style={thTdStyle}>{record.purpose}</td>
              <td style={thTdStyle}>{record.diagnosis}</td>
              <td style={thTdStyle}>{record.surgery}</td>
              <td style={thTdStyle}>{record.medications}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thTdStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "left",
};

export default MedicalHistory;
