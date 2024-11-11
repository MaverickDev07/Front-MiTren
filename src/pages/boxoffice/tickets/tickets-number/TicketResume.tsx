import { useLocation } from 'react-router-dom';

const Ticket = ({ counts, pricesMap, origin, destination, line, transfer, transfer_end_line, transfer_station }) => {
  const location = useLocation();

  // Calcular el total sumando los precios de los tickets multiplicados por los contadores
  const totalAmount = Object.keys(counts).reduce((total, ticketType) => {
    const count = counts[ticketType] || 0;
    const price = pricesMap[ticketType] || 0;
    return total + count * price;
  }, 0);

  // Verificar si al menos un tipo de ticket tiene un contador mayor a cero
  const hasTickets = Object.values(counts).some(count => count > 0);

  return (
    <div className="lg:w-[800px] md:w-[300px] h-full border-2 border-black p-6 font-mono bg-white rounded-[44px]">
      <h2 className="text-center sm:text-xs md:text-xs lg:text-2xl font-bold mb-4">TICKETS</h2>
      <div className="border-b-2 border-dotted border-black mb-4"></div>

      {hasTickets && (
        <>
          <div className="flex justify-between font-bold sm:text-xs md:text-xs lg:text-2xl font-bold mb-4">
            <span>CANT</span>
            <span>TICKET</span>
            <span>PRECIO</span>
            <span>TOTAL</span>
          </div>
          <div className="border-b-2 border-dotted border-black mb-4"></div>

          {Object.keys(counts).map((ticketType) => (
            counts[ticketType] > 0 && (
              <div key={ticketType} className="flex justify-between sm:text-xs md:text-xs lg:text-2xl mb-4">
                <span>{counts[ticketType]}</span>
                <span>{ticketType}</span>
                <span>{pricesMap[ticketType]?.toFixed(2)}</span>
                <span>{(counts[ticketType] * pricesMap[ticketType]).toFixed(2)}</span>
              </div>
            )
          ))}

          <div className="border-b-2 border-dotted border-black mb-4"></div>
        </>
      )}

      <div className="sm:text-xs md:text-xs lg:text-2xl mb-4">
        <p>Estación origen: {origin}</p>
        <p>Estación destino: {destination}</p>
        <p>Línea de origen: {line}</p>
      </div>
      <div className="border-b-2 border-dotted border-black mb-4"></div>

      {transfer ? (
        <>
          <p className="sm:text-xs md:text-xs lg:text-2xl">Transbordo: Sí</p>
          <p className="sm:text-xs md:text-xs lg:text-2xl">A: {transfer_end_line}</p>
          <p className="sm:text-xs md:text-xs lg:text-2xl">En: {transfer_station}</p>
        </>
      ) : (
        <p className="sm:text-xs md:text-xs lg:text-2xl">Transbordo: No</p>
      )}

      {/* Mostrar el total solo en la página de pago */}
      {location.pathname === '/kiosk/ticket-payment' && hasTickets && (
        <div className="mt-6 text-right font-bold sm:text-xs md:text-xl lg:text-2xl">
          <p>Total: {totalAmount.toFixed(2)} bs</p>
        </div>
      )}
    </div>
  );
};

export default Ticket;

