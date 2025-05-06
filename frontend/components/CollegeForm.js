import React, { useState } from 'react';

const CollegeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    idNumber: '',
    firstName: '',
    middleInitial: '',
    lastName: '',
    program: '',
    yearLevel: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, type: 'college' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>College Student Registration</h3>
      <input name="idNumber" placeholder="ID Number" onChange={handleChange} required />
      <input name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input name="middleInitial" placeholder="Middle Initial" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input name="program" placeholder="Program" onChange={handleChange} required />
      <input name="yearLevel" placeholder="Year Level" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CollegeForm;
