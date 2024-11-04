import React from 'react';

type TicketInfoProps = {
  ticketData: {
    count: number;
    type: string;
    destination: string;
    purchaseDate: string;
  };
};

const TicketInfo: React.FC<TicketInfoProps> = ({ ticketData }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg text-sm">
      <p><strong>Cantidad:</strong> {ticketData.count}</p>
      <p><strong>Tipo:</strong> {ticketData.type}</p>
      <p><strong>Destino:</strong> {ticketData.destination}</p>
      <p><strong>Fecha de compra:</strong> {ticketData.purchaseDate}</p>
    </div>
  );
};

export default TicketInfo;
