import { useState, useEffect } from 'react';
import BackgroundEffect from "@/components/BackgroundEffect";
import TicketResume from "./TicketResume";
import TicketNumberItem from "./TicketNumberItem";
import { useLocation, useNavigate } from "react-router";
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';
import { mockApiDestino } from "@/services/mockApiDestino";

const TicketNumberPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';
  const navigate = useNavigate();

  const [count, setCount] = useState(0);
  const [line, setLine] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockApiDestino);
        }, 500);
      });
      setLine(response.selectedLine);
      setDestination(response.selectedDestination);
    };

    fetchDestination();
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePayment = () => {
    navigate('/ticket-payment', { state: { ticketCount: count, line, destination } });
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
            <TicketNumberItem 
              count={count} 
              onIncrement={increment} 
              onDecrement={decrement} 
            />
            <ButtonLink to='/kiosk/destination' className="bg-white text-black h-[70px] sm:h-[82px] flex items-center justify-between px-4">
              <svg className="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              <div className="flex-1 text-left">Destinos</div>
            </ButtonLink>
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <TicketResume ticketCount={count} />
            <button onClick={handlePayment} className="relative z-[1] inline-flex justify-center items-center gap-4 p-8 w-full text-2xl uppercase font-interTight font-bold select-none rounded-[44px] box-border border-black border-[10px] active:translate-y-1 transition duration-[25ms] ease-linear active:opacity-85 bg-white h-[82px]">
              <div className="flex-1 text-left">Pagar</div>
              <svg className="h-8 w-8 text-black-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketNumberPage;

