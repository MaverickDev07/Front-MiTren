import React from 'react';

type ScanButtonProps = {
  label: string;
  onClick: () => void;
};

const ScanButton: React.FC<ScanButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black py-8 px-4 rounded-full mt-6 shadow-lg"
    >
      {label}
    </button>
  );
};

export default ScanButton;