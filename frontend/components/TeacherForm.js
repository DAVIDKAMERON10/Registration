import React, { useState } from 'react';

const TeacherForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    idNumber: '',
    firstName: '',
    middleInitial: '',
    lastName: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, type: 'teacher' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Teacher Registration</h3>
      <input name="idNumber" placeholder="ID Number" onChange={handleChange} required />
      <input name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input name="middleInitial" placeholder="Middle Initial" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input name="department" placeholder="Affiliated Department" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TeacherForm;
