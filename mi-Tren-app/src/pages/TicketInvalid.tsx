import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import ScanButton from '../components/ScanButton';

const TicketInvalid: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const qrImage = location.state?.qrImage;

  const handleRetry = () => {
    navigate('/'); // Redirige para intentar nuevamente
  };

  return (
    <div className="min-h-screen bg-mitren-primary bg-doodle text-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Usuario VerificadorQR</h1>
      {qrImage && (
        <div className="w-64 h-64 mb-4">
          <img src={qrImage} alt="QR Erróneo" className="w-full h-full object-cover rounded-lg" />
        </div>
      )}
      <StatusBadge status="invalid" />
      <ScanButton label="Escanear Ticket" onClick={handleRetry} />
    </div>
  );
};

export default TicketInvalid;

