import BackgroundEffect from "@/components/BackgroundEffect";
import { useLocation, useNavigate } from "react-router";
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';

const TicketPaymentQR = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Usar useNavigate para la navegación
  const path = location.pathname;
  const unnotted = path !== '/';

  const { ticketCount, line, destination } = location.state || {};

  const handleGenerateQR = () => {
    navigate('/paymentQR', { state: { ticketCount } });
  };

  return (
    <div className="container flex flex-col gap-6 mx-auto pt-8 px-4">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop />
      </div>
      <div className="w-full lg:px-20 xl:px-[101px]">
        <BackgroundEffect unnotted={unnotted} />
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col w-full lg:w-[508px] gap-4 flex-shrink-0">
            <button onClick={handleGenerateQR} className="relative z-[1] inline-flex justify-center items-center gap-4 p-8 w-full text-2xl uppercase font-interTight font-bold select-none rounded-[44px] box-border border-black border-[10px] active:translate-y-1 transition duration-[25ms] ease-linear active:opacity-85 bg-white h-[82px]">
              <svg className="h-8 w-8 text-black-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <line x1="7" y1="17" x2="7" y2="17.01" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <line x1="7" y1="7" x2="7" y2="7.01" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <line x1="17" y1="7" x2="17" y2="7.01" />
                <line x1="14" y1="14" x2="17" y2="14" />
                <line x1="20" y1="14" x2="20" y2="14.01" />
                <line x1="14" y1="14" x2="14" y2="17" />
                <line x1="14" y1="20" x2="17" y2="20" />
                <line x1="17" y1="17" x2="20" y2="17" />
                <line x1="20" y1="17" x2="20" y2="20" />
              </svg>
              <div className="flex-1 text-left">Generar QR</div>
              <svg className="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <ButtonLink to='/linea/destination/tickets/' className="bg-white text-black h-[70px] sm:h-[82px] flex items-center justify-between px-4">
              <svg className="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <div className="flex-1 text-left">Tickets</div>
            </ButtonLink>
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <div className="w-full h-full flex flex-col bg-white rounded-[44px] p-8">
              {ticketCount > 0 ? (
                <>
                  <h3 className="font-black text-3xl">Resumen de Pago</h3>
                  <p className="text-xl font-semibold">Línea: {line?.line_name}</p>
                  <p className="text-xl font-semibold">Destino: {destination?.name}</p>
                  <p className="text-xl font-semibold">Ticket: General</p>
                  <p className="text-xl font-semibold">Cantidad de Tickets: {ticketCount}</p>
                  <p className="text-xl font-semibold">Total a Pagar: {ticketCount * 1} Bs</p>
                </>
              ) : (
                <p>No hay tickets para pagar.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketPaymentQR;