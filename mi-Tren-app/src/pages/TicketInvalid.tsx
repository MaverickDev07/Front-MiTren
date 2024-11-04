import React from 'react';
import Header from '../components/Header';
import StatusBadge from '../components/StatusBadge';
import ScanButton from '../components/ScanButton';

const TicketInvalid: React.FC = () => {
  const handleRetry = () => {
    console.log("Reintentar escaneo...");
  };

  return (
    <div className="min-h-screen bg-blue-700 text-white flex flex-col items-center">
      <Header title="Usuario VerificadorQR" />
      <StatusBadge status="invalid" />
      <ScanButton label="Escanear Ticket" onClick={handleRetry} />
    </div>
  );
};

export default TicketInvalid;
