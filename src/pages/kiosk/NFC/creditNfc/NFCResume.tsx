import { useLocation } from 'react-router-dom';

const NFC = ({ montoRecargado }) => {
  const location = useLocation();

//   // Calcular el total sumando los precios de los tickets multiplicados por los contadores
//   const totalAmount = Object.keys(counts).reduce((total, ticketType) => {
//     const count = counts[ticketType] || 0;
//     const price = pricesMap[ticketType] || 0;
//     return total + count * price;
//   }, 0);

//   // Verificar si al menos un tipo de ticket tiene un contador mayor a cero
//   const hasTickets = Object.values(counts).some(count => count > 0);

  return (
    <div className="lg:w-[800px] md:w-[300px] h-full border-2 border-black p-6 font-mono bg-white rounded-[44px]">
      <h2 className="text-center sm:text-xs md:text-xs lg:text-2xl font-bold mb-4">DETALLE DE RECARGA</h2>
      <div className="border-b-2 border-dotted border-black mb-4"></div>

        <>
          <div className="flex justify-between font-bold sm:text-xs md:text-xs lg:text-2xl font-bold mb-4">
            <span>N°</span>
            <span>MONTO RECARGA</span>
            <span>SALDO</span>
          </div>
          <div className="border-b-2 border-dotted border-black mb-4"></div>

              <div className="flex justify-between sm:text-xs md:text-xs lg:text-2xl mb-4">
                <span>1</span>
                <span>{montoRecargado}</span>
                <span>20</span>
              </div>

          <div className="border-b-2 border-dotted border-black mb-4"></div>
        </>


      {/* Mostrar el total solo en la página de pago */}
      {location.pathname === '/kiosk/PaymentNFC' && (
        <div className="mt-6 text-right font-bold sm:text-xs md:text-xl lg:text-2xl">
          <p>Total Recarga: {montoRecargado} bs</p>
        </div>
      )}
    </div>
  );
};

export default NFC;
