import React, { useState } from 'react';
import { QrReader } from '@blackbox-vision/react-qr-reader';

const QRScanner: React.FC = () => {
  const [qrResult, setQrResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-md w-64 h-64">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              const scannedText = result.getText();

              // Si el resultado no es válido, no hace nada
              if (scannedText.startsWith("http") || scannedText.length > 10) { // Ajusta este criterio a lo que esperes de un QR
                setQrResult(scannedText);
              } else {
                // Ignora el resultado si no es un QR
                setError("Escaneo no válido. Esperando código QR...");
              }
            }

            if (!!error) {
              setError("Error al leer el QR");
            }
          }}
          constraints={{ facingMode: 'environment' }}
          videoStyle={{ width: '100%', height: '100%' }}
        />
      </div>
      {qrResult && (
        <div className="mt-4 p-2 bg-white rounded shadow text-black">
          <p><strong>Resultado del QR:</strong> {qrResult}</p>
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default QRScanner;
