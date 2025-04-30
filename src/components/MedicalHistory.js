import React, { useState } from "react";
import "./MedicalHistory.css";

const allPatients = [
  {
    name: "John Doe",
    age: 45,
    gender: "Male",
    roomNumber: "101A",
    numberOfDays: 5,
    diagnosis: "Severe Stroke",
    surgeryRequired: "Yes",
    lastSurgeryDate: "2025-04-15",
    previousSurgeries: [
      { surgeryName: "Appendectomy", surgeryDate: "2015-03-20", complications: "None" },
      { surgeryName: "Knee Replacement", surgeryDate: "2020-06-10", complications: "Mild infection during recovery" },
    ],
    currentMedications: [
      { medicationName: "Aspirin", dosage: "100mg", frequency: "Once a day" },
      { medicationName: "Lisinopril", dosage: "20mg", frequency: "Twice a day" },
    ],
    emergencyContacts: [{ name: "Jane Doe", relationship: "Wife", phone: "+91-9876543210" }],
    medicalNotes: "Patient is recovering well after stroke treatment. Surgery for stroke to be planned in the coming weeks.",
    profilePicture: "https://tse1.mm.bing.net/th?id=OIP.pqDBRoJIRgF5udh4Kq_xawHaLH&pid=Api&P=0&h=180",
  },
  {
    name: "Alice Smith",
    age: 52,
    gender: "Female",
    roomNumber: "102B",
    numberOfDays: 3,
    diagnosis: "Minor Heart Attack",
    surgeryRequired: "No",
    lastSurgeryDate: null,
    previousSurgeries: [],
    currentMedications: [{ medicationName: "Metoprolol", dosage: "50mg", frequency: "Once a day" }],
    emergencyContacts: [{ name: "Bob Smith", relationship: "Husband", phone: "+91-9876509876" }],
    medicalNotes: "Under observation, responding well to medication.",
    profilePicture: "https://thumbs.dreamstime.com/z/common-man-just-like-us-glossary-shop-owner-45796863.jpg",
  },
  {
    name: "David Johnson",
    age: 63,
    gender: "Male",
    roomNumber: "105C",
    numberOfDays: 7,
    diagnosis: "Chronic Obstructive Pulmonary Disease (COPD)",
    surgeryRequired: "No",
    lastSurgeryDate: null,
    previousSurgeries: [],
    currentMedications: [
      { medicationName: "Salbutamol", dosage: "100mcg", frequency: "As needed" },
      { medicationName: "Fluticasone", dosage: "250mcg", frequency: "Twice a day" },
    ],
    emergencyContacts: [{ name: "Emily Johnson", relationship: "Daughter", phone: "+91-9876543212" }],
    medicalNotes: "Patient is managing symptoms with medication and regular checkups.",
    profilePicture: "https://tse1.mm.bing.net/th?id=OIP.sHw9fQGbhjH8V0Sm1XLJOgHaFi&pid=Api&P=0&h=180",
  },
  {
    name: "Sophia Williams",
    age: 28,
    gender: "Female",
    roomNumber: "108D",
    numberOfDays: 1,
    diagnosis: "Fractured Leg",
    surgeryRequired: "Yes",
    lastSurgeryDate: "2025-04-10",
    previousSurgeries: [{ surgeryName: "Appendectomy", surgeryDate: "2016-05-20", complications: "None" }],
    currentMedications: [{ medicationName: "Ibuprofen", dosage: "200mg", frequency: "Every 6 hours" }],
    emergencyContacts: [{ name: "Michael Williams", relationship: "Husband", phone: "+91-9876501234" }],
    medicalNotes: "Leg fracture treated with cast. Recovery is progressing well.",
    profilePicture: "https://tse3.mm.bing.net/th?id=OIP.vCBerFCQkLoCZDOxVlvBigHaE8&pid=Api&P=0&h=180",
  },
  {
    name: "James Brown",
    age: 35,
    gender: "Male",
    roomNumber: "109E",
    numberOfDays: 4,
    diagnosis: "Pneumonia",
    surgeryRequired: "No",
    lastSurgeryDate: null,
    previousSurgeries: [],
    currentMedications: [{ medicationName: "Amoxicillin", dosage: "500mg", frequency: "Three times a day" }],
    emergencyContacts: [{ name: "Linda Brown", relationship: "Mother", phone: "+91-9876549876" }],
    medicalNotes: "Under treatment with antibiotics. Symptoms improving.",
    profilePicture: "https://tse2.mm.bing.net/th?id=OIP.wa6IgtEMuH7iKy56cwJXaAHaJ4&pid=Api&P=0&h=180",
  },
  {
    name: "Liam Martinez",
    age: 47,
    gender: "Male",
    roomNumber: "110F",
    numberOfDays: 6,
    diagnosis: "Diabetes Type 2",
    surgeryRequired: "No",
    lastSurgeryDate: null,
    previousSurgeries: [],
    currentMedications: [{ medicationName: "Metformin", dosage: "500mg", frequency: "Twice a day" }],
    emergencyContacts: [{ name: "Isabella Martinez", relationship: "Wife", phone: "+91-9876546543" }],
    medicalNotes: "Monitoring blood sugar levels regularly. Maintaining a healthy lifestyle.",
    profilePicture: "https://c8.alamy.com/comp/2D8XY8B/indian-country-grandma-2D8XY8B.jpg",
  },
  {
    name: "Emma Davis",
    age: 60,
    gender: "Female",
    roomNumber: "112G",
    numberOfDays: 8,
    diagnosis: "Osteoarthritis",
    surgeryRequired: "Yes",
    lastSurgeryDate: "2025-03-30",
    previousSurgeries: [{ surgeryName: "Hip Replacement", surgeryDate: "2018-11-15", complications: "None" }],
    currentMedications: [{ medicationName: "Paracetamol", dosage: "500mg", frequency: "As needed" }],
    emergencyContacts: [{ name: "Olivia Davis", relationship: "Daughter", phone: "+91-9876547890" }],
    medicalNotes: "Patient is awaiting further treatment for joint pain relief.",
    profilePicture: "https://tse3.mm.bing.net/th?id=OIP.EYzzb0OSBJQ6n3LQhN1EdwHaL_&pid=Api&P=0&h=180",
  },
  {
    name: "Mason Lee",
    age: 38,
    gender: "Male",
    roomNumber: "113H",
    numberOfDays: 2,
    diagnosis: "Acute Bronchitis",
    surgeryRequired: "No",
    lastSurgeryDate: null,
    previousSurgeries: [],
    currentMedications: [{ medicationName: "Cough Syrup", dosage: "10ml", frequency: "Three times a day" }],
    emergencyContacts: [{ name: "Ava Lee", relationship: "Wife", phone: "+91-9876543333" }],
    medicalNotes: "Symptoms are improving with medication. Further observation needed.",
    profilePicture: "https://tse2.mm.bing.net/th?id=OIP.yL4qUGliK1d3euIns90WYwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "Lucas Garcia",
    age: 55,
    gender: "Male",
    roomNumber: "115I",
    numberOfDays: 4,
    diagnosis: "Gastric Ulcer",
    surgeryRequired: "No",
    lastSurgeryDate: null,
    previousSurgeries: [],
    currentMedications: [{ medicationName: "Omeprazole", dosage: "20mg", frequency: "Once a day" }],
    emergencyContacts: [{ name: "Sophia Garcia", relationship: "Wife", phone: "+91-9876545678" }],
    medicalNotes: "Patient is recovering with medication. Avoiding spicy foods.",
    profilePicture: "https://tse2.mm.bing.net/th?id=OIP._GQhv02YolWMzaKvTlg4GQHaLH&pid=Api&P=0&h=180",
  },
  {
    name: "Amelia Harris",
    age: 50,
    gender: "Female",
    roomNumber: "116J",
    numberOfDays: 3,
    diagnosis: "Anemia",
    surgeryRequired: "No",
    lastSurgeryDate: null,
    previousSurgeries: [],
    currentMedications: [{ medicationName: "Iron Supplements", dosage: "100mg", frequency: "Once a day" }],
    emergencyContacts: [{ name: "Ethan Harris", relationship: "Husband", phone: "+91-9876544321" }],
    medicalNotes: "Patient is improving with iron supplements and a balanced diet.",
    profilePicture: "https://thumbs.dreamstime.com/b/portrait-grandfather-22238331.jpg",
  },
  {
    name: "Olivia Taylor",
    age: 63,
    gender: "Female",
    roomNumber: "118K",
    numberOfDays: 9,
    diagnosis: "Alzheimer's Disease",
    surgeryRequired: "No",
    lastSurgeryDate: null,
    previousSurgeries: [],
    currentMedications: [{ medicationName: "Donepezil", dosage: "5mg", frequency: "Once a day" }],
    emergencyContacts: [{ name: "Jack Taylor", relationship: "Son", phone: "+91-9876541234" }],
    medicalNotes: "Patient requires assistance with daily activities. Monitoring closely.",
    profilePicture: "https://tse4.mm.bing.net/th?id=OIP.4vZ2x-GGaYuXq5b6y_WalgHaE8&pid=Api&P=0&h=180",
  },
];

const MedicalHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Filter patients based on search term
  const filteredPatients = allPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="medical-history-container">
      <h2>🩺 Patient Medical History</h2>

      {/* Search Area */}
      <div className="search-area">
        <input
          type="text"
          placeholder="Enter patient name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Displaying patients as grid */}
      <div className="patients-grid">
        {filteredPatients.map((patient, index) => (
          <div
            key={index}
            className="patient-card"
            onClick={() => handlePatientClick(patient)}
          >
            <img src={patient.profilePicture} alt="Patient Profile" className="profile-picture" />
            <h4>{patient.name}</h4>
            <p>{patient.diagnosis}</p>
          </div>
        ))}
      </div>

      {/* Display detailed medical history of the selected patient */}
      {selectedPatient && (
        <div className="medical-history-card">
          {/* Same content as before for selected patient */}
        </div>
      )}
    </div>
  );
};

export default MedicalHistory;
