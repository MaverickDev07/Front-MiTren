import React, { useState } from 'react';
import { QrReader } from '@blackbox-vision/react-qr-reader';

const QRScanner: React.FC = () => {
  const [qrResult, setQrResult] = useState<string | null>(null);

  const handleScan = (data: string | null) => {
    if (data) {
      setQrResult(data);
      console.log("QR Code detected:", data);
    }
  };

  const handleError = (error: any) => {
    console.error("Error scanning QR:", error);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-lg font-bold mb-4">Escanea el código QR</h2>
      <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              handleScan(result.getText());
            }
            if (!!error) {
              handleError(error);
            }
          }}
          constraints={{ facingMode: 'environment' }} // Use the back camera on mobile devices
        />
      </div>
      {qrResult && (
        <div className="mt-4 p-2 bg-white rounded shadow">
          <p><strong>Resultado del QR:</strong> {qrResult}</p>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
