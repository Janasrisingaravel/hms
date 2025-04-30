import React, { useState, useEffect } from 'react';
import './Employees.css'; // Assuming you'll create a new CSS file for the design

function EmployeesPage() {
  const [employees, setEmployees] = useState([]);

  // Simulating fetching employee data (replace with actual fetching logic)
  useEffect(() => {
    const fetchEmployees = () => {
      const data = [
        { id: 1, name: 'John Doe', position: 'Cleaner', department: 'Maintenance', contact: '123-456-7890' },
        { id: 2, name: 'Jane Smith', position: 'Cleaner', department: 'Housekeeping', contact: '987-654-3210' },
        { id: 3, name: 'Emily Johnson', position: 'Janitor', department: 'Sanitation', contact: '555-123-4567' },
        { id: 4, name: 'Michael Brown', position: 'Cleaner', department: 'Maintenance', contact: '111-222-3333' },
        { id: 5, name: 'Sarah Lee', position: 'Janitor', department: 'Sanitation', contact: '444-555-6666' }
      ];
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <div className="employees-container">
      <h2>Employee Information (Cleaning Staff)</h2>
      <div className="table-wrapper">
        <table className="employees-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Department</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{employee.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeesPage;
