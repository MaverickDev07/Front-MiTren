import { useLocation, useNavigate } from "react-router";
import NavigatorTop from "@/components/NavigatorTop";
import { ArrowIcon, ArrowIconR, CardIcon, MoneyIcon, QRicon } from "@/assets/icons";
import useFetch from "@/hook/useFetch";
import MultiColumnLayout from "@/components/MultiColumnLayout";
import ButtonBase from "@/components/ButtonBase";
import Ticket from "../tickets-number/TicketResume";

const metodos = import.meta.env.VITE_Metodos
interface Method {
  id: string;
  method_name: string;
}

const TicketPaymentQR = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ticketData = location.state || JSON.parse(localStorage.getItem("ticketData"));

  const { data, loading, error } = useFetch(`${metodos}`);

  const iconMap: { [key: string]: React.ElementType } = {
    "EFECTIVO": CardIcon,
    "TARJETA DÉBITO/CRÉDITO": MoneyIcon,
    "PAGOSQR": QRicon,
  };

  const totalAmount = Object.keys(ticketData.counts).reduce((total, ticketType) => {
    const count = ticketData.counts[ticketType] || 0;
    const price = ticketData.pricesMap[ticketType] || 0;
    return total + count * price;
  }, 0);

  const handlePayment = (method: Method) => {
    let route = "/kiosk/ticket-payment/paymentQR";

    // Definir la ruta según el nombre del método recibido
    switch (method.method_name) {
      case "EFECTIVO":
        route = "/kiosk/ticket-payment/paymentMoney";
        break;
      case "TARJETA DÉBITO/CRÉDITO":
        route = "/kiosk/ticket-payment/paymentCard";
        break;
      case "PQR":
        route = "/kiosk/ticket-payment/paymentQR";
        break;
      default:
        console.warn(`Método de pago no reconocido: ${method.method_name}`);
    }

    navigate(route, {
      state: {
        method:method.method_name ,
        monto: totalAmount.toFixed(2),
        start_station: ticketData.origin,
        end_station: ticketData.destination,
      },
    });
  };

  const handleReturn = () => {
    navigate(`/kiosk/destination/tickets/${ticketData.id_origin}`, { state: ticketData });
  };
  console.log(data)
  const columnsPay = [
    {
      id: "col1",
      content: (
        <div className="flex flex-col w-full gap-2 flex-shrink-1 p-6">
          <h2 className="font-bold text-2xl sm:text-2xl lg:text-4xl text-white uppercase px-2">METODOS DE PAGO</h2>
          {loading && <p>Cargando métodos de pago...</p>}
          {error && <p>Error al cargar métodos de pago.</p>}
          {!loading && !error && data?.methods?.map((method: Method) => {
            const MethodIcon = iconMap[method.method_name] || QRicon;
            return (
              <ButtonBase
                key={method.id}
                className="bg-white text-black inline-flex justify-end items-center gap-4 px-6 mt-4"
                height="h-[60px] sm:h-[50px] md:h-[70px] md:w-[300px] lg:h-[100px] lg:w-[800px] xl:h[100px] 4xl:h-[100px]"
                borderColor="box-border border-black border-[10px]"
                onClick={() => handlePayment(method)}
              >
                {MethodIcon && <MethodIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-16 lg:h-8" />}
                <div className="flex-1 text-left">{method.method_name}</div>
                <ArrowIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-16 lg:h-8" />
              </ButtonBase>
            );
          })}
          <ButtonBase 
            className="bg-white text-black inline-flex justify-end items-center gap-4 px-6 mt-4"
            height="h-[60px] sm:h-[50px] md:h-[50px] lg:h-[60px] xl:h[60px] 4xl:h-[90px]"
            backgroundColor="bg-yellow-500"
            borderColor="box-border border-black border-[10px]"
            onClick={handleReturn}
          >
            <ArrowIconR className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-16 lg:h-8"/>
            <div className="flex-1 text-left">Tickets</div>
          </ButtonBase>
        </div>
      ),
    },
    {
      id: 'col2',
      content: (
        <div className="w-full mt-1 lg:mt-0">
          {ticketData ? (
            <Ticket 
              counts={ticketData.counts}
              pricesMap={ticketData.pricesMap}
              origin={ticketData.origin}
              destination={ticketData.destination}
              line={ticketData.line}
              transfer={ticketData.transfer}
              transfer_end_line={ticketData.transfer_end_line}
              transfer_station={ticketData.transfer_station}
            />
          ) : (
            <p>No se recibieron datos del ticket.</p>
          )} 
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title="Comprar Ticket - Pagar"/>
      </div>
      <div className="container mx-auto md:px-8 md:pb-8 lg:p-8">
        <MultiColumnLayout columns={columnsPay} />
      </div>
    </div>
  );
}

export default TicketPaymentQR;
