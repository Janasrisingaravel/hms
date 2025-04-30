import React, { useState } from 'react';
import './addoctor.css';

function DoctorPage() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Dr. John Doe',
      specialization: 'Cardiology',
      available: '9:00 AM - 5:00 PM',
      photo: 'https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon.jpg'
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialization: 'Neurology',
      available: '10:00 AM - 4:00 PM',
      photo: 'https://static.vecteezy.com/system/resources/previews/028/287/384/non_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg'
    },
    {
      id: 3,
      name: 'Dr. Alan Walker',
      specialization: 'Orthopedics',
      available: '8:00 AM - 6:00 PM',
      photo: 'https://segurancadotrabalhosempre.com/wp-content/uploads/2016/08/O6T8LS01.jpg'
    },
    {
      id: 4,
      name: 'Dr. Priya Varma',
      specialization: 'Dermatology',
      available: '11:00 AM - 3:00 PM',
      photo: 'https://www.humanitas.net/content/uploads/2017/10/doctors.jpg'
    },
    {
      id: 5,
      name: 'Dr. Robert Lee',
      specialization: 'Pediatrics',
      available: '7:00 AM - 1:00 PM',
      photo: 'https://static.vecteezy.com/system/resources/thumbnails/005/405/671/small_2x/happy-young-doctor-smiling-to-the-camera-while-making-online-video-call-home-medical-consulation-service-concepts-photo.jpg'
    },
    {
      id: 6,
      name: 'Dr. Ravi Kumar',
      specialization: 'ENT',
      available: '12:00 PM - 8:00 PM',
      photo: 'https://img.freepik.com/premium-photo/indian-doctor-wearing-white-coat-with-stethoscope_85574-3676.jpg?w=2000'
    },
    {
      id: 7,
      name: 'Dr. Emily Brown',
      specialization: 'General Medicine',
      available: '9:30 AM - 4:30 PM',
      photo: 'https://tse2.mm.bing.net/th?id=OIP.PG1Q-I665WG9xeyI7pyqKgHaHa&pid=Api&P=0&h=180'
    },
    {
      id: 8,
      name: 'Dr. Mohammed Ali',
      specialization: 'Pulmonology',
      available: '10:00 AM - 6:00 PM',
      photo: 'https://tse2.mm.bing.net/th?id=OIP.AuKOC33Ge2DPyBJ0TJ2TUgHaLl&pid=Api&P=0&h=180'
    },
    {
      id: 9,
      name: 'Dr. Sara Khan',
      specialization: 'Gynaecology',
      available: '11:00 AM - 5:00 PM',
      photo: 'https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-17.png'
    }
  ]);

  return (
    <div className="doctor-page">
      <h2>Doctors Information</h2>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
            <h3>{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Available Hours:</strong> {doctor.available}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorPage;
