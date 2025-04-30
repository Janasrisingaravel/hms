import React, { useState } from "react";
import "./AppointmentHistory.css";

const initialAppointments = [
  {
    id: 1,
    patientName: "John Doe",
    date: "2025-04-18T10:30",
    reason: "General Checkup",
    status: "Upcoming",
    photo: "https://tse2.mm.bing.net/th?id=OIP._GQhv02YolWMzaKvTlg4GQHaLH&pid=Api&P=0&h=180"
  },
  {
    id: 2,
    patientName: "Sarah Smith",
    date: "2025-04-10T14:00",
    reason: "Migraine",
    status: "Completed",
    photo: "https://tse2.mm.bing.net/th?id=OIP._GQhv02YolWMzaKvTlg4GQHaLH&pid=Api&P=0&h=180"
  },
  {
    id: 3,
    patientName: "Michael Brown",
    date: "2025-04-20T09:00",
    reason: "Consultation",
    status: "Upcoming",
    photo: "https://tse2.mm.bing.net/th?id=OIP._GQhv02YolWMzaKvTlg4GQHaLH&pid=Api&P=0&h=180"
  },
  {
    id: 4,
    patientName: "Emily Clark",
    date: "2025-04-25T11:45",
    reason: "Blood Pressure Check",
    status: "Upcoming",
    photo: "https://tse4.mm.bing.net/th?id=OIP.4vZ2x-GGaYuXq5b6y_WalgHaE8&pid=Api&P=0&h=180"
  },
  {
    id: 5,
    patientName: "David Lee",
    date: "2025-04-22T15:30",
    reason: "Follow-up",
    status: "Upcoming",
    photo: "https://tse2.mm.bing.net/th?id=OIP._GQhv02YolWMzaKvTlg4GQHaLH&pid=Api&P=0&h=180"
  },
  {
    id: 6,
    patientName: "Angela White",
    date: "2025-04-12T09:00",
    reason: "Chest Pain",
    status: "Completed",
    photo: "https://tse2.mm.bing.net/th?id=OIP._GQhv02YolWMzaKvTlg4GQHaLH&pid=Api&P=0&h=180"
  },
  {
    id: 7,
    patientName: "Chris Evans",
    date: "2025-04-27T13:15",
    reason: "Routine Exam",
    status: "Upcoming",
    photo: "https://thumbs.dreamstime.com/b/portrait-grandfather-22238331.jpg"
  }
];

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const finishAppointment = (id) => {
    const updatedAppointments = appointments.filter(
      (app) => app.id !== id || app.status !== "Upcoming"
    );
    setAppointments(updatedAppointments);
  };

  const upcomingAppointments = appointments.filter(
    (app) => app.status === "Upcoming"
  );

  return (
    <div className="appointment-history-container">
      <h2>📅 Upcoming Appointments</h2>
      <div className="appointments-grid">
        {upcomingAppointments.length === 0 ? (
          <p>No upcoming appointments.</p>
        ) : (
          upcomingAppointments.map((app) => (
            <div key={app.id} className="appointment-card">
              <img src={app.photo} alt={app.patientName} className="patient-photo" />
              <div className="appointment-info">
                <h3>{app.patientName}</h3>
                <p>📆 {new Date(app.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}</p>
                <p>🩺 {app.reason}</p>
                <button 
                  className="finish-button"
                  onClick={() => finishAppointment(app.id)}
                >
                  ✅ Finish
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppointmentHistory;
