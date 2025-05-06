import React, { useState } from 'react';

const SHSForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    idNumber: '',
    firstName: '',
    middleInitial: '',
    lastName: '',
    strand: '',
    yearLevel: '',
    preferredCourse: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, type: 'shs' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Senior High School Registration</h3>
      <input name="idNumber" placeholder="ID Number" onChange={handleChange} required />
      <input name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input name="middleInitial" placeholder="Middle Initial" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input name="strand" placeholder="Strand" onChange={handleChange} required />
      <input name="yearLevel" placeholder="Year Level" onChange={handleChange} required />
      <input name="preferredCourse" placeholder="Preferred Course in College" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SHSForm;
