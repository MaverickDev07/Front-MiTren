import { useLocation } from "react-router-dom";

interface NFCProps {
  montoRecargado: number;
}

const NFC: React.FC<NFCProps> = ({ montoRecargado }) => {
  const location = useLocation();
  
  return (
    <div className="lg:w-[800px] md:w-[300px] h-full border-2 border-black p-6 font-mono bg-white rounded-[44px]">
      <h2 className="text-center sm:text-xs md:text-xs lg:text-2xl font-bold mb-4">
        DETALLE RECUPERACION TARJETA NFC
      </h2>
      <div className="border-b-2 border-dotted border-black mb-4"></div>

      <div>
        <div className="flex justify-between font-bold sm:text-xs md:text-xs lg:text-2xl mb-4">
          <span>N°</span>
          <span>TIPO</span>
          <span>TARJETA</span>
        </div>
        <div className="border-b-2 border-dotted border-black mb-4"></div>

        {/* Detalle de la recarga */}
        <div className="flex justify-between sm:text-xs md:text-xs lg:text-2xl mb-4">
          <span>1</span>
          <span>Tarjeta NFC</span>
          <span>{montoRecargado} bs</span>
        </div>

        <div className="border-b-2 border-dotted border-black mb-4"></div>
      </div>

      {/* Mostrar el total si la ruta coincide */}
      {location.pathname === "/boleteria/RecoverCardNFC/RecoverPage/RecoverPay" && (
        <div className="md:mt-[5rem] lg:mt-[10rem] text-right font-bold sm:text-xs md:text-xl lg:text-2xl">
          <p>Total Compra: {montoRecargado} bs</p>
        </div>
      )}
    </div>
  );
};

export default NFC;
