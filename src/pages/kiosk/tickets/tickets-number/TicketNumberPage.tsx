import { useState, useEffect } from 'react';
import TicketNumberItem from "./TicketNumberItem";
import { useNavigate } from "react-router";
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';
import { ArrowIcon, ArrowIconR } from '@/assets/icons';
import MultiColumnLayout from '@/components/MultiColumnLayout';
import useFetch from '@/hook/useFetch';  // Hook para llamar a la API
import TicketResume from './TicketResume';

const TicketNumberPage = () => {
  const navigate = useNavigate();
  // Estado para manejar los contadores de cada tipo de ticket
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    GENERAL: 0,
    ESCOLAR: 0,
  });
  // Objeto predefinido en caso de error
  const price2 = [
    {
      id: "predefined-1",
      base_price: 1.5,
      customer_type: "GENERAL",
      customer_type_id: "predefined-general",
      start_station: {
        station_id: "predefined-start",
        station_name: "DIRECCIÓN ESTACIÓN PREDEFINIDA 1",
      },
      end_station: {
        station_id: "predefined-end",
        station_name: "DIRECCIÓN ESTACIÓN PREDEFINIDA 3",
      }
    },
    {
      id: "predefined-2",
      base_price: 0.75,
      customer_type: "ESCOLAR",
      customer_type_id: "predefined-school",
      start_station: {
        station_id: "predefined-start",
        station_name: "DIRECCIÓN ESTACIÓN PREDEFINIDA 1",
      },
      end_station: {
        station_id: "predefined-end",
        station_name: "DIRECCIÓN ESTACIÓN PREDEFINIDA 3",
      }
    }
  ];

  // Llamada a la API
  const { data, loading, error } = useFetch("/v1/ticket_flow/step-3/:start_station_id/:end_station_id");

  // Si hay un error, usar `price2` como fallback
  const prices = error ? price2 : data?.prices || [];

  const increment = (type: string) => {
    setCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const decrement = (type: string) => {
    setCounts((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] - 1, 0),
    }));
  };
  console.log('de',decrement)
  console.log('in',increment)
  const handlePayment = () => {
    navigate('/ticket-payment', { state: { ticketCount: count, line, destination } });
  };

  const columnsTicket = [
    {
      id: 'col1',
      content: (
        <div className="flex flex-col w-full gap-4 flex-shrink-1 p-6">
          {prices.map((price: any) => (
            <TicketNumberItem
              key={price.id}
              count={counts[price.customer_type] || 0} 
              onIncrement={() => increment(price.customer_type)}
              onDecrement={() => decrement(price.customer_type)}
              basePrice={price.base_price}
              customerType={price.customer_type}
            />
          ))}
          <ButtonLink 
            to='/kiosk/destination' className="bg-white text-black flex items-center justify-between px-4 bg-red" 
            height = "h-[60px] sm:h-[50px] md:h-[50px] lg:h-[60px] xl:h[60px] 4xl:h-[60px]"
            backgroundColor="bg-yellow-500"
            borderColor="box-border border-black border-[10px]"
            >
            <ArrowIconR className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-16 lg:h-8"/>
            <div className="flex-1 text-left">Destinos</div>
          </ButtonLink>
          {/* Mapeo de los tipos de tickets y precios */}
        </div>
      ),
    },
    {
      id: 'col2',
      content: (
        <div className="w-full mt-4 lg:mt-0">
          {/* Aquí puedes agregar cualquier otro contenido */}
          {/* <TicketResume ticketCount={count} />
            <button onClick={handlePayment} 
              className="relative z-[1] inline-flex justify-center items-center gap-4 p-8 w-full text-2xl uppercase font-interTight font-bold select-none rounded-[44px] box-border border-black border-[10px] active:translate-y-1 transition duration-[25ms] ease-linear active:opacity-85 bg-white h-[82px]">
              <div className="flex-1 text-left">Pagar</div>
              <ArrowIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-16 lg:h-8" />
            </button> */}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop />
      </div>
      <div className="container mx-auto p-8">
        <MultiColumnLayout columns={columnsTicket} />
      </div>
    </div>
  );
};

export default TicketNumberPage;


