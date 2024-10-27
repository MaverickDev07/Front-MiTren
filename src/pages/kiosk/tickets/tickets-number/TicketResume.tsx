import { useEffect, useState } from 'react';

const TicketResume = ({ ticketCount }) => {
  

  return (
    <>
      <div className="w-full h-full flex flex-col bg-white rounded-[44px] p-8">
        <h3 className="text-center font-Inconsolata font-bold text-[40px]">TICKETS</h3>
        {line && destination ? (
          <div className="mt-4 text-center">
            {ticketCount > 0 ? (
              <>
                <table className="mx-auto text-center font-Inconsolata font-bold text-[40px]">
                  <thead>
                    <tr>
                      <th>Cant</th>
                      <th>Ticket</th>
                      <th>Precio</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{ticketCount}</td>
                      <td>General</td>
                      <td>1</td>
                      <td>{ticketCount * 0.75}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xl font-semibold">Línea: {line.line_name}</p>
                <p className="text-xl font-semibold">Destino: {destination.name}</p>
              </>
            ) : (
              <p className="text-xl font-semibold">No hay tickets seleccionados.</p>
            )}
          </div>
        ) : (
          <p className="text-center">Cargando...</p>
        )}
      </div>
    </>
  );
};

export default TicketResume;