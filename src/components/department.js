import React, { useState } from 'react';
import './department.css';

function Department() {
  const [departments, setDepartments] = useState([
    {
      name: 'Cardiology',
      head: 'Dr. Rajiv Menon',
      staff: 10,
      patients: 120,
      description: 'Deals with disorders of the heart and circulatory system.',
      hours: 'Mon-Fri 9am - 5pm',
    },
    {
      name: 'Neurology',
      head: 'Dr. Anita Iyer',
      staff: 8,
      patients: 90,
      description: 'Handles conditions related to the brain and nerves.',
      hours: 'Mon-Fri 10am - 6pm',
    },
    {
      name: 'Orthopedics',
      head: 'Dr. Suresh Kumar',
      staff: 6,
      patients: 70,
      description: 'Focuses on bones, joints, ligaments, and tendons.',
      hours: 'Mon-Sat 8am - 4pm',
    }
  ]);

  const [newDepartment, setNewDepartment] = useState({
    name: '',
    head: '',
    staff: '',
    patients: '',
    description: '',
    hours: ''
  });

  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddDepartment = () => {
    if (newDepartment.name.trim() !== '' && newDepartment.head.trim() !== '') {
      const newDeptObject = { ...newDepartment };
      setDepartments([...departments, newDeptObject]);
      setNewDepartment({
        name: '',
        head: '',
        staff: '',
        patients: '',
        description: '',
        hours: ''
      });
    }
  };

  const handleEditDepartment = (index) => {
    setNewDepartment(departments[index]);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    const updatedDepartments = [...departments];
    updatedDepartments[editIndex] = newDepartment;
    setDepartments(updatedDepartments);
    setEditMode(false);
    setNewDepartment({
      name: '',
      head: '',
      staff: '',
      patients: '',
      description: '',
      hours: ''
    });
  };

  const handleDeleteDepartment = (index) => {
    const updatedDepartments = departments.filter((_, i) => i !== index);
    setDepartments(updatedDepartments);
  };

  return (
    <div className="department-wrapper">
      <h2>Manage Hospital Departments</h2>

      <div className="department-input">
        <div className="input-field">
          <label>Department Name:</label>
          <input
            type="text"
            value={newDepartment.name}
            onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label>Department Head:</label>
          <input
            type="text"
            value={newDepartment.head}
            onChange={(e) => setNewDepartment({ ...newDepartment, head: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label>Staff Count:</label>
          <input
            type="number"
            value={newDepartment.staff}
            onChange={(e) => setNewDepartment({ ...newDepartment, staff: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label>Patient Count:</label>
          <input
            type="number"
            value={newDepartment.patients}
            onChange={(e) => setNewDepartment({ ...newDepartment, patients: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label>Department Description:</label>
          <input
            type="text"
            value={newDepartment.description}
            onChange={(e) => setNewDepartment({ ...newDepartment, description: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label>Operating Hours:</label>
          <input
            type="text"
            value={newDepartment.hours}
            onChange={(e) => setNewDepartment({ ...newDepartment, hours: e.target.value })}
          />
        </div>
        <button onClick={editMode ? handleSaveEdit : handleAddDepartment}>
          {editMode ? 'Save Changes' : 'Add Department'}
        </button>
      </div>

      <div className="department-grid">
        {departments.map((dept, index) => (
          <div className="department-card" key={index}>
            <div className="department-card-header">
              <h3>{dept.name}</h3>
            </div>
            <div className="department-card-body">
              <p><strong>Head:</strong> {dept.head}</p>
              <p><strong>Staff:</strong> {dept.staff}</p>
              <p><strong>Patients:</strong> {dept.patients}</p>
              <p><strong>Description:</strong> {dept.description}</p>
              <p><strong>Operating Hours:</strong> {dept.hours}</p>
            </div>
            <div className="department-card-footer">
              <button onClick={() => handleEditDepartment(index)}>Edit</button>
              <button onClick={() => handleDeleteDepartment(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Department;
