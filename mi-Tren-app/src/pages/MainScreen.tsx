import React from 'react';
import Header from '../components/Header';
import QRScanner from '../components/QRScanner';
import ScanButton from '../components/ScanButton';

const MainScreen: React.FC = () => {
  const handleScan = () => {
    console.log("Iniciar escaneo...");
  };

  return (
    <div className="min-h-screen bg-mitren-primary bg-doodle text-whitex flex flex-col items-center">
      <Header title="Usuario VerificadorQR" />
      <QRScanner />
      <ScanButton label="Escanear Ticket" onClick={handleScan} />
    </div>
  );
};

export default MainScreen;
