import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import './UserTable.css';
const UserTable = () => {
  const [userData, setUserData] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', age: 25, gender: 'Male', city: 'New York', state: 'NY', email: 'john.doe@example.com', phoneNumber: '555-1234' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 30, gender: 'Female', city: 'Los Angeles', state: 'CA', email: 'jane.smith@example.com', phoneNumber: '555-5678' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 28, gender: 'Male', city: 'Chicago', state: 'IL', email: 'bob.johnson@example.com', phoneNumber: '555-8765' },
    { id: 4, firstName: 'Alice', lastName: 'Williams', age: 35, gender: 'Female', city: 'Houston', state: 'TX', email: 'alice.williams@example.com', phoneNumber: '555-4321' },
    { id: 5, firstName: 'Charlie', lastName: 'Brown', age: 32, gender: 'Male', city: 'San Francisco', state: 'CA', email: 'charlie.brown@example.com', phoneNumber: '555-9876' },
    { id: 6, firstName: 'Eva', lastName: 'Davis', age: 27, gender: 'Female', city: 'Miami', state: 'FL', email: 'eva.davis@example.com', phoneNumber: '555-6543' },
  ]);

  const handleDeleteUser = (id) => {
    const updatedData = userData.filter(user => user.id !== id);
    setUserData(updatedData);
  };

  return (
    <>
    <AdminNavbar/>
    <div className="user-table-container">
      <h2>User Table</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default UserTable;
