import React, { useState } from 'react';
import CollegeForm from './components/CollegeForm';
import SHSForm from './components/SHSForm';
import TeacherForm from './components/TeacherForm';
import ConfirmationPage from './components/ConfirmationPage';

 
const App = () => {
    const [selectedType, setSelectedType] = useState('');
    const [formData, setFormData] = useState(null);
  
    const handleSubmit = (data) => {
      setFormData({ ...data, type: selectedType });
      setSelectedType('confirmation');
    };
  
    const renderForm = () => {
      switch (selectedType) {
        case 'college':
          return <CollegeForm onSubmit={handleSubmit} />;
        case 'shs':
          return <SHSForm onSubmit={handleSubmit} />;
        case 'teacher':
          return <TeacherForm onSubmit={handleSubmit} />;
        case 'confirmation':
          return <ConfirmationPage data={formData} />;
        default:
          return null;
      }
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        {selectedType !== 'confirmation' && (
          <>
            <h2>Exhibition Event Registration</h2>
            <div style={{ marginBottom: '20px' }}>
              <button onClick={() => setSelectedType('college')}>College</button>
              <button onClick={() => setSelectedType('shs')} style={{ margin: '0 10px' }}>Senior High School</button>
              <button onClick={() => setSelectedType('teacher')}>Teacher</button>
            </div>
          </>
        )}
        {renderForm()}
      </div>
    );
  };

export default App;