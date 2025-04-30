import React, { useState } from 'react';
import './SurgeryTheatre.css';

function SurgeryTheatrePage() {
  const operatingRooms = [
    {
      roomNumber: 'OR-1',
      surgerySchedule: [
        { patient: 'John Doe', surgery: 'Appendectomy', date: '2025-04-21', time: '10:00 AM', status: 'Pending' },
        { patient: 'Jane Smith', surgery: 'Knee Replacement', date: '2025-04-21', time: '01:00 PM', status: 'Scheduled' }
      ],
      equipmentList: [
        { name: 'Surgical Instruments', status: 'Available', lastServiced: '2025-03-01', responsible: 'Dr. A' },
        { name: 'Anesthesia Machine', status: 'In-use', lastServiced: '2025-01-15', responsible: 'Nurse B' }
      ],
      staffList: [
        { name: 'Dr. John', role: 'Surgeon', shift: '9 AM - 5 PM', contact: '123-456-7890' },
        { name: 'Nurse Alice', role: 'Nurse', shift: '9 AM - 5 PM', contact: '987-654-3210' }
      ]
    },
    {
      roomNumber: 'OR-2',
      surgerySchedule: [
        { patient: 'Alice Brown', surgery: 'Hip Replacement', date: '2025-04-22', time: '11:00 AM', status: 'Scheduled' }
      ],
      equipmentList: [
        { name: 'Surgical Instruments', status: 'Available', lastServiced: '2025-03-05', responsible: 'Dr. C' }
      ],
      staffList: [
        { name: 'Dr. Mike', role: 'Surgeon', shift: '9 AM - 5 PM', contact: '123-789-4560' }
      ]
    }
  ];

  const [selectedRoom, setSelectedRoom] = useState(operatingRooms[0]);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="surgery-container">
      <h1>Surgery Theatre</h1>
      <p>Manage Surgery Theatre operations here.</p>

      {/* Room Selection Dropdown */}
      <h2>Select Operating Room</h2>
      <select onChange={(e) => handleRoomSelect(operatingRooms[e.target.value])}>
        {operatingRooms.map((room, index) => (
          <option key={index} value={index}>
            {room.roomNumber}
          </option>
        ))}
      </select>

      {/* Operating Room Information */}
      <h2>Operating Room: {selectedRoom.roomNumber}</h2>
      
      <h3>Surgery Schedule</h3>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Surgery</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {selectedRoom.surgerySchedule.map((surgery, index) => (
            <tr key={index}>
              <td>{surgery.patient}</td>
              <td>{surgery.surgery}</td>
              <td>{surgery.date}</td>
              <td>{surgery.time}</td>
              <td>{surgery.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Equipment Status</h3>
      <table>
        <thead>
          <tr>
            <th>Equipment</th>
            <th>Status</th>
            <th>Last Serviced</th>
            <th>Responsible Staff</th>
          </tr>
        </thead>
        <tbody>
          {selectedRoom.equipmentList.map((equipment, index) => (
            <tr key={index}>
              <td>{equipment.name}</td>
              <td>{equipment.status}</td>
              <td>{equipment.lastServiced}</td>
              <td>{equipment.responsible}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Assigned Staff</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Shift</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {selectedRoom.staffList.map((staff, index) => (
            <tr key={index}>
              <td>{staff.name}</td>
              <td>{staff.role}</td>
              <td>{staff.shift}</td>
              <td>{staff.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Provide Feedback</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert('Feedback submitted!'); }}>
        <textarea placeholder="Leave feedback about your surgery experience" rows="5" />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default SurgeryTheatrePage;
