import { ArrowIconR } from "@/assets/icons";
import ButtonBase from "@/components/ButtonBase";
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

  const handleButtonClick = (value: string) => {
    handleMontoChange(monto + value);
  };

  const handleBackspace = () => {
    handleMontoChange(monto.slice(0, -1));
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full flex flex-col items-center">
      <input
        type="text"
        value={monto}
        onChange={(e) => handleMontoChange(e.target.value)}
        placeholder="Escribe el monto"
        className="text-center sm:text-sm lg:text-2xl w-full max-w-md bg-white text-black py-2 px-4 rounded-lg mb-4 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="grid grid-cols-3 gap-4 mb-4">
        {[...Array(9).keys()].map((i) => (
          <ButtonBase
            key={i + 1}
            className="bg-white text-black font-bold rounded-lg shadow inline-flex justify-center items-center gap-4 sm:p-4 lg:p-10"
            onClick={() => handleButtonClick((i + 1).toString())}
            height="h-[60px] sm:h-[70px] md:h-[50px] lg:h-[80px] xl:h[80px] 4xl:h-[100px]"
            fontSize="text-lg md:text-base lg:text-xl 4xl:text-2xl"
          >
            {i + 1}
          </ButtonBase>
        ))}
        <ButtonBase
          className="bg-white text-black font-bold rounded-lg shadow inline-flex justify-center items-center gap-4 sm:p-4 lg:p-10"
          onClick={() => handleButtonClick(",")}
          height="h-[60px] sm:h-[70px] md:h-[50px] lg:h-[80px] xl:h[80px] 4xl:h-[100px]"
          fontSize="text-lg md:text-base lg:text-xl 4xl:text-2xl"
        >
          ,
        </ButtonBase>
        <ButtonBase
          className="bg-white text-black font-bold rounded-lg shadow inline-flex justify-center items-center gap-4 sm:p-4 lg:p-10"
          onClick={() => handleButtonClick("0")}
          height="h-[60px] sm:h-[70px] md:h-[50px] lg:h-[80px] xl:h[80px] 4xl:h-[100px]"
          fontSize="text-lg md:text-base lg:text-xl 4xl:text-2xl"
        >
          0
        </ButtonBase>
        <ButtonBase
          className="text-white font-bold py-2 px-3 rounded-lg shadow"
          backgroundColor="bg-purple-500"
          borderColor="border-black border-[1px]"
          height="h-[60px] sm:h-[70px] md:h-[50px] lg:h-[80px] xl:h[80px] 4xl:h-[100px] 4xl:w-[100px]"
          onClick={handleBackspace}
        >
          <ArrowIconR className="w-8 h-8 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-16 lg:h-8" />
        </ButtonBase>
      </div>
    </form>
  );
};

export default RecargaForm;
