import React, { useState } from "react";
import "./adpatient.css";

const PatientManagement = () => {
  const [inPatients, setInPatients] = useState([
    { name: "John Doe", age: 35 },
    { name: "Sam Johnson", age: 50 },
  ]);

  const [outPatients, setOutPatients] = useState([
    { name: "Jane Smith", age: 28 },
  ]);

  const [newPatientName, setNewPatientName] = useState("");
  const [newPatientAge, setNewPatientAge] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchAge, setSearchAge] = useState("");

  // Function to generate the bill for the patient
  const generateBill = (patient) => {
    // Example charges
    const treatmentCharge = 200;
    const roomCharge = 100;
    const totalAmount = treatmentCharge + roomCharge;
    
    return {
      name: patient.name,
      age: patient.age,
      treatmentCharge,
      roomCharge,
      totalAmount,
    };
  };

  // Function to discharge patient and open the bill window
  const dischargePatient = (index) => {
    const patient = inPatients[index];
    const bill = generateBill(patient);

    // Calculate the center position for the new window
    const width = 600;
    const height = 500;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    // Open a new window to show the bill
    const billWindow = window.open(
      "",
      "_blank",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    billWindow.document.write("<html><head><title>Patient Bill</title>");
    billWindow.document.write("<style>");
    billWindow.document.write(`
      body {
        font-family: Arial, sans-serif;
        color: #333;
        padding: 20px;
        margin: 0;
      }
      h1 {
        text-align: center;
        color: #4CAF50;
        font-size: 24px;
      }
      .bill-container {
        max-width: 500px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
      }
      .bill-container h2 {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .bill-container p {
        font-size: 16px;
        margin: 5px 0;
      }
      .total {
        font-size: 18px;
        font-weight: bold;
        color: #d32f2f;
        margin-top: 15px;
        text-align: center;
      }
      .footer {
        margin-top: 30px;
        text-align: center;
        font-size: 14px;
        color: #777;
      }
      .footer a {
        color: #4CAF50;
        text-decoration: none;
      }
    `);
    billWindow.document.write("</style></head><body>");
    billWindow.document.write("<h1>Patient Bill</h1>");
    billWindow.document.write(`
      <div class="bill-container">
        <h2>Bill Details</h2>
        <p><strong>Name:</strong> ${bill.name}</p>
        <p><strong>Age:</strong> ${bill.age}</p>
        <p><strong>Treatment Charge:</strong> $${bill.treatmentCharge}</p>
        <p><strong>Room Charge:</strong> $${bill.roomCharge}</p>
        <p class="total"><strong>Total Amount: $${bill.totalAmount}</strong></p>
        <div class="footer">
          <p>Thank you for choosing our hospital!</p>
          <p><a href="javascript:window.close()">Close Bill</a></p>
        </div>
      </div>
    `);
    billWindow.document.write("</body></html>");

    // Check if the window is closed and update the patient list
    const interval = setInterval(() => {
      if (billWindow.closed) {
        clearInterval(interval);
        setOutPatients([...outPatients, patient]);  // Move patient to Out-Patients
        setInPatients(inPatients.filter((_, i) => i !== index));  // Remove from In-Patients
      }
    }, 500);  // Check every 500ms if the window is closed
  };

  const addPatient = () => {
    if (newPatientName && newPatientAge) {
      const newPatient = {
        name: newPatientName,
        age: parseInt(newPatientAge),
      };
      setInPatients([...inPatients, newPatient]);
      setNewPatientName("");
      setNewPatientAge("");
    }
  };

  const filterPatients = (patients) =>
    patients.filter((patient) => {
      return (
        (!searchName || patient.name.toLowerCase().includes(searchName.toLowerCase())) &&
        (!searchAge || patient.age.toString() === searchAge)
      );
    });

  return (
    <div className="container">
      <h2>🧑‍⚕️ Patient Management</h2>

      {/* Search Form */}
      <div className="patient-form">
        <input
          type="text"
          placeholder="Search Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Search Age"
          value={searchAge}
          onChange={(e) => setSearchAge(e.target.value)}
        />
      </div>

      {/* Add Patient Form */}
      <div className="patient-form">
        <input
          type="text"
          placeholder="Name"
          value={newPatientName}
          onChange={(e) => setNewPatientName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={newPatientAge}
          onChange={(e) => setNewPatientAge(e.target.value)}
        />
        <button onClick={addPatient}>+ Add Patient</button>
      </div>

      {/* In-Patients */}
      <div className="section-column">
        <h3>🛏️ In-Patients</h3>
        <div className="grid-box">
          {filterPatients(inPatients).map((patient, index) => (
            <div className="box" key={index}>
              <h4>{patient.name}</h4>
              <p>Age: {patient.age}</p>
              <p>Status: In-Patient</p>
              <button className="btn-discharge" onClick={() => dischargePatient(index)}>
                Discharge
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Out-Patients */}
      <div className="section-column">
        <h3>💊 Out-Patients</h3>
        <div className="grid-box">
          {filterPatients(outPatients).map((patient, index) => (
            <div className="box" key={index}>
              <h4>{patient.name}</h4>
              <p>Age: {patient.age}</p>
              <p>Status: Out-Patient</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientManagement;
