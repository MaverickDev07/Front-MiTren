import React from 'react';
import Header from '../components/Header';
import StatusBadge from '../components/StatusBadge';
import TicketInfo from '../components/TicketInfo';
import ScanButton from '../components/ScanButton';

const TicketExpired: React.FC = () => {
  const ticketData = {
    count: 1,
    type: 'Preferencial',
    destination: 'Plaza Central',
    purchaseDate: '2023-10-31 14:30',
  };

  const handleRetry = () => {
    console.log("Reintentar escaneo...");
  };

  return (
    <div className="min-h-screen bg-blue-700 text-white flex flex-col items-center">
      <Header title="Usuario VerificadorQR" />
      <StatusBadge status="expired" />
      <TicketInfo ticketData={ticketData} />
      <ScanButton label="Escanear Ticket" onClick={handleRetry} />
    </div>
  );
};

export default TicketExpired;
