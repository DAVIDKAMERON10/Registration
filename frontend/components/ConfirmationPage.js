import React from 'react';
import { QRCode } from 'qrcode.react';

const ConfirmationPage = ({ data }) => {
  const fullName = `${data.firstName} ${data.middleInitial} ${data.lastName}`;
  const getParticipantLabel = () => {
    switch (data.type) {
      case 'college':
        return 'College Student';
      case 'shs':
        return 'SHS Student';
      case 'teacher':
        return 'Teacher';
      default:
        return '';
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', marginRight: '40px' }}>
        <h3>You are now registered!</h3>
        <QRCode value={data.qrCodeData} size={150} />
        <h4>{fullName}</h4>
        <p><strong>{getParticipantLabel()}</strong></p>
      </div>
      <div>
        <button onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
