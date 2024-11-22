import React, { useEffect, useState } from "react";

interface RecargaFormProps {
  onSubmit: (monto: string) => void;
  onMontoChange: (monto: string) => void;
  initialMonto: string; 
}

const RecargaForm: React.FC<RecargaFormProps> = ({ onSubmit, onMontoChange, initialMonto }) => {
  const [monto, setMonto] = useState<string>(initialMonto);
  useEffect(() => {
    setMonto(initialMonto);
  }, [initialMonto]);

  const handleMontoChange = (nuevoMonto: string) => {
    setMonto(nuevoMonto);
    onMontoChange(nuevoMonto);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (monto.trim() !== "") {
      onSubmit(monto);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full flex flex-col items-center">
            <label className="font-bold text-2xl sm:text-4xl text-white sm:mb-14 lg:mb-[10rem] lg:mt-[10rem]">
        INSERTE EL MONTO A RECARGAR
      </label>
      <input
        type="text"
        value={monto}
        onChange={(e) => handleMontoChange(e.target.value)}
        placeholder="Escribe el monto"
        className="text-center sm:text-2xl lg:text-5xl w-full max-w-md bg-white text-black py-16 px-4 rounded-lg sm:mb-4 lg:mb-16 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </form>
  );
};

export default RecargaForm;
