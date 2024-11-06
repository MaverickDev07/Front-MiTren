import React from 'react';
import QRScanner from '../components/QRScanner';
// import { useNavigate } from 'react-router';

const MainScreen: React.FC = () => {
  // const [qrImage, setQrImage] = useState<string | null>(null);
  // const navigate = useNavigate();

  // // const handleQrError = (image: string) => {
  // //   setQrImage(image);
  // //   navigate('/ticket-invalid', { state: { qrImage: image } });
  // // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-mitren-primary bg-doodle text-white">
      <h1 className="text-2xl font-bold mb-6">Usuario VerificadorQR</h1>
      <QRScanner />
      <h2 className="text-center text-lg font-bold mb-4">Enfoque el QR del ticket</h2>
    </div>
  );
};

export default MainScreen;
