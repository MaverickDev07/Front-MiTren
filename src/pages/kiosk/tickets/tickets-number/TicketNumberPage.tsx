import { useState } from 'react';
import TicketNumberItem from "./TicketNumberItem";
import { useLocation, useNavigate } from "react-router";
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';
import { ArrowIcon, ArrowIconR } from '@/assets/icons';
import MultiColumnLayout from '@/components/MultiColumnLayout';
import useFetch from '@/hook/useFetch';
import ButtonBase from '@/components/ButtonBase';
import Ticket from './TicketResume';

const TicketNumberPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { itinerary } = location.state || {};
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    GENERAL: 0,
    PREFERENCIAL: 0,
    ESTUDIANTES: 0,
    PROMOCION: 0
  });
  const lastDestination = itinerary?.length > 0 ? itinerary[itinerary.length - 1] : null;
  const startStationId = lastDestination?.station_id_start;
  // const endStationId = lastDestination?.station_id_end; 
  const apiEndpoint = startStationId // && endStationId 
  ? `/v1/ticket_flow/step-3/${startStationId}/67196ae491a3da2f4fe40ab1` 
  : null;
  // console.log(itinerary)
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
    }
  ];

  // Llamada a la API
  const { data: fetchedPriceData, loading, error } = useFetch(apiEndpoint);
  // Si hay un error, usar `price2` como fallback
  const prices = error ? price2 : fetchedPriceData?.prices || [];

  const pricesMap = prices.reduce((map, price) => {
    map[price.customer_type] = price.base_price;
    return map;
  }, {});

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
  const handlePayment = () => {
    const ticketData = {
      counts,
      pricesMap,
      origin: fetchedPriceData?.start_point.start_station,
      destination: fetchedPriceData?.end_point.end_station,
      line: fetchedPriceData?.start_point.start_line,
      transfer: fetchedPriceData?.transfer_point.is_transfer,
      transfer_end_line: fetchedPriceData?.end_point.end_line,
      transfer_station: fetchedPriceData?.transfer_point.transfer_station,
    };
    console.log(ticketData)
    navigate('/kiosk/ticket-payment', { state: ticketData });
  };

  const isPaymentDisabled = !Object.values(counts).some(count => count > 0);

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
        </div>
      ),
    },
    {
      id: 'col2',
      content: (
        <div className="w-full mt-1 lg:mt-0">
          { fetchedPriceData &&
            <Ticket
            counts={counts}
            pricesMap={pricesMap}
            origin={fetchedPriceData?.start_point.start_station}
            destination={fetchedPriceData?.end_point.end_station}
            line={fetchedPriceData?.start_point.start_line}
            transfer={fetchedPriceData?.transfer_point.is_transfer}
            transfer_end_line={fetchedPriceData?.end_point.end_line}
            transfer_station={fetchedPriceData?.transfer_point.transfer_station}
            />
          }
          <ButtonBase
            className="bg-white text-black inline-flex justify-end items-center gap-4 px-6 mt-4" 
            height = "h-[60px] sm:h-[50px] md:h-[60px] md:w-[300px] lg:h-[60px] lg:w-[800px] xl:h[60px] 4xl:h-[60px]"
            backgroundColor="bg-yellow-500"
            borderColor="box-border border-black border-[10px]"
            onClick={handlePayment} 
            disabled={isPaymentDisabled}
          >
            <div className="flex-1 text-left">Pagar</div>
            <ArrowIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-16 lg:h-8" />
          </ButtonBase>
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


