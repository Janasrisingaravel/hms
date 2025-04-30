import React, { useState, useEffect } from 'react';
import './Nurse.css';

function NursePage() {
  const [nurses, setNurses] = useState([]);
  const [editNurseId, setEditNurseId] = useState(null); // Track which nurse is being edited
  const [editFormData, setEditFormData] = useState({
    name: '',
    department: '',
    contact: '',
    shift: '',
    experience: '',
    status: ''
  });

  useEffect(() => {
    const fetchNurses = () => {
      const data = [
        {
          id: 1,
          name: 'John Doe',
          department: 'Cardiology',
          contact: '123-456-7890',
          shift: 'Morning',
          experience: '5 years',
          status: 'Active'
        },
        {
          id: 2,
          name: 'Jane Smith',
          department: 'Neurology',
          contact: '987-654-3210',
          shift: 'Evening',
          experience: '3 years',
          status: 'Active'
        },
        {
          id: 3,
          name: 'Emily Johnson',
          department: 'Orthopedics',
          contact: '555-123-4567',
          shift: 'Night',
          experience: '4 years',
          status: 'On Leave'
        },
        {
          id: 4,
          name: 'Michael Brown',
          department: 'Emergency',
          contact: '111-222-3333',
          shift: 'Morning',
          experience: '6 years',
          status: 'Active'
        },
        {
          id: 5,
          name: 'Sarah Lee',
          department: 'ICU',
          contact: '444-555-6666',
          shift: 'Evening',
          experience: '2 years',
          status: 'Inactive'
        }
      ];

      setNurses(data);
    };
    fetchNurses();
  }, []);

  // Handle the change in the form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  // Handle the click of the Edit button
  const handleEditClick = (nurse) => {
    setEditNurseId(nurse.id);
    setEditFormData({
      name: nurse.name,
      department: nurse.department,
      contact: nurse.contact,
      shift: nurse.shift,
      experience: nurse.experience,
      status: nurse.status
    });
  };

  // Handle the Save button click
  const handleSaveChanges = () => {
    const updatedNurses = nurses.map((nurse) =>
      nurse.id === editNurseId ? { ...nurse, ...editFormData } : nurse
    );
    setNurses(updatedNurses);
    setEditNurseId(null); // Reset after saving
  };

  return (
    <div className="nurse-container">
      <h2>Nurse Information</h2>
      <div className="table-wrapper">
        <table className="nurse-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Contact</th>
              <th>Shift</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Actions</th> {/* Add Actions column for Edit button */}
            </tr>
          </thead>
          <tbody>
            {nurses.map((nurse) => (
              <tr key={nurse.id}>
                <td>{nurse.id}</td>
                <td>
                  {editNurseId === nurse.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    nurse.name
                  )}
                </td>
                <td>
                  {editNurseId === nurse.id ? (
                    <input
                      type="text"
                      name="department"
                      value={editFormData.department}
                      onChange={handleInputChange}
                    />
                  ) : (
                    nurse.department
                  )}
                </td>
                <td>
                  {editNurseId === nurse.id ? (
                    <input
                      type="text"
                      name="contact"
                      value={editFormData.contact}
                      onChange={handleInputChange}
                    />
                  ) : (
                    nurse.contact
                  )}
                </td>
                <td>
                  {editNurseId === nurse.id ? (
                    <input
                      type="text"
                      name="shift"
                      value={editFormData.shift}
                      onChange={handleInputChange}
                    />
                  ) : (
                    nurse.shift
                  )}
                </td>
                <td>
                  {editNurseId === nurse.id ? (
                    <input
                      type="text"
                      name="experience"
                      value={editFormData.experience}
                      onChange={handleInputChange}
                    />
                  ) : (
                    nurse.experience
                  )}
                </td>
                <td>
                  {editNurseId === nurse.id ? (
                    <input
                      type="text"
                      name="status"
                      value={editFormData.status}
                      onChange={handleInputChange}
                    />
                  ) : (
                    nurse.status
                  )}
                </td>
                <td>
                  {editNurseId === nurse.id ? (
                    <button onClick={handleSaveChanges}>Save</button>
                  ) : (
                    <button onClick={() => handleEditClick(nurse)}>Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NursePage;
