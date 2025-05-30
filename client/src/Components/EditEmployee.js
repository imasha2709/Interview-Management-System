import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { employees } from "../data";
import "./UserProfile.css";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const empData = employees.find((e) => e.id === parseInt(id));
  const [formData, setFormData] = useState({ ...empData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const index = employees.findIndex((e) => e.id === parseInt(id));
  if (index !== -1) {
    employees[index] = { ...formData };
  }
  alert("Changes saved!");
  navigate("/employees");
};

  return (
    <div className="user-profile-container">
      <h1 className="title">Edit Employee - {formData.employeeName}</h1>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Username</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Employee Name</label>
          <input
            name="employeeName"
            type="text"
            value={formData.employeeName}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Employee Number</label>
          <input
            name="empNumber"
            type="text"
            value={formData.empNumber}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Date of Birth</label>
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="email-field">
          <label className="form-label">Address</label>
          <input
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="email-field">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="edit-btn">Save</button>
      </form>
    </div>
  );
};

export default EditEmployee;
