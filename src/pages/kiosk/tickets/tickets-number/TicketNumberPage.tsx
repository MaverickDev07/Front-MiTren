import { useState, useEffect } from 'react';
import BackgroundEffect from "@/components/BackgroundEffect";
import TicketResume from "./TicketResume";
import TicketNumberItem from "./TicketNumberItem";
import { useLocation, useNavigate } from "react-router";
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';
import { mockApiDestino } from "@/services/mockApiDestino";
import { ArrowIcon, ArrowIconR } from '@/assets/icons';

const TicketNumberPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [line, setLine] = useState(null);
  const [destination, setDestination] = useState(null);

  console.log(path)

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
              <ArrowIconR className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h4 lg:w-8 lg:h-8" />
              <div className="flex-1 text-left">Destinos</div>
            </ButtonLink>
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <TicketResume ticketCount={count} />
            <button onClick={handlePayment} className="relative z-[1] inline-flex justify-center items-center gap-4 p-8 w-full text-2xl uppercase font-interTight font-bold select-none rounded-[44px] box-border border-black border-[10px] active:translate-y-1 transition duration-[25ms] ease-linear active:opacity-85 bg-white h-[82px]">
              <div className="flex-1 text-left">Pagar</div>
              <ArrowIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h4 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketNumberPage;

