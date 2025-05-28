import React from "react";
import { Link } from "react-router-dom";
import { employees } from "../data";
import "./UserProfile.css";

const EmployeeList = () => {
  return (
    <div className="user-profile-container">
      <h1 className="title">Manage User</h1>
      <h3 className="titl">View User Profile</h3>

      {employees.map((emp) => (
        <div key={emp.id} className="form-grid card-box">
          <div>
            <label className="form-label">Username</label>
            <input type="text" value={emp.username} disabled className="form-input" />
          </div>

          <div>
            <label className="form-label">Employee Name</label>
            <input type="text" value={emp.employeeName} disabled className="form-input" />
          </div>

          <div>
            <label className="form-label">Employee Number</label>
            <input type="text" value={emp.empNumber} disabled className="form-input" />
          </div>

          <div>
            <label className="form-label">Date of Birth</label>
            <input type="text" value={emp.dob} disabled className="form-input" />
          </div>

          <div className="email-field">
            <label className="form-label">Address</label>
            <input type="text" value={emp.address} disabled className="form-input" />
          </div>

          <div>
            <label className="form-label">Email</label>
            <input type="email" value={emp.email} disabled className="form-input" />
          </div>

          <div>
            <Link to={`/edit/${emp.id}`}>
              <button className="edit-btn">Edit</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
