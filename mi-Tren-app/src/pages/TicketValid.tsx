import React from 'react';
import StatusBadge from '../components/StatusBadge';
import TicketInfo from '../components/TicketInfo';
import ScanButton from '../components/ScanButton';

const TicketValid: React.FC = () => {
  const ticketData = {
    count: 1,
    type: 'General',
    destination: 'Plaza Central',
    purchaseDate: '2023-10-31 14:30',
  };

  const handleRetry = () => {
    console.log("Reintentar escaneo...");
  };

  return (
    <div className="min-h-screen bg-mitren-primary bg-doodle text-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Usuario VerificadorQR</h1>
      <StatusBadge status="valid" />
      <TicketInfo ticketData={ticketData} />
      <ScanButton label="Escanear Ticket" onClick={handleRetry} />
    </div>
  );
};

export default TicketValid;
