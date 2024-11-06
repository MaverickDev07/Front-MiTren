import React from 'react';

const MobileOnlyWarning: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500 text-white text-center">
      <h1 className="text-2xl">Esta aplicación solo está disponible en dispositivos móviles</h1>
    </div>
  );
};

export default MobileOnlyWarning;
