import { useLocation, useNavigate } from "react-router";
import NavigatorTop from "@/components/NavigatorTop";
import { ArrowIcon, CardIcon, MoneyIcon, QRicon } from "@/assets/icons";
// import useFetch from "@/hook/useFetch";
import MultiColumnLayout from "@/components/MultiColumnLayout";
import ButtonBase from "@/components/ButtonBase";
interface Method {
  id: string;
  method_name: string;
}


const TicketPaymentQR = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Usar useNavigate para la navegación
  
  // const { counts, destination, line, origin, pricesMap, transfer, transfer_end_line, transfer_station} = location.state || {};
  const { ticketCount, line, destination } = location.state || {};

  // respuesta Hipotetica guardada en objeto de una API
  const metodos2= {methods:[
        {
            "id": "66c9ec9bd4c202de9f5e1b34",
            "method_name": "EFECTIVO"
        },
        {
            "id": "66c9eca5d4c202de9f5e1b36",
            "method_name": "TARJETA DÉBITO/CRÉDITO"
        },
        {
            "id": "66c9ed1ed4c202de9f5e1b3a",
            "method_name": "PAGOSQR"
        }
    ]}
    const iconMap = {
      "66c9ec9bd4c202de9f5e1b34": CardIcon,
      "66c9eca5d4c202de9f5e1b36": MoneyIcon,
      "66c9ed1ed4c202de9f5e1b3a": QRicon,
    };

  // const { data, loading, error } = useFetch("/v1/ticket_flow/step-4/methods");

  

  const columnsPay = [
    {
      id: "col1",
      content: (
        <div className="flex flex-col w-full gap-4 flex-shrink-1 p-6">
          {metodos2?.methods.map((method: Method) => {
            const MethodIcon = iconMap[method.id]; // Obtiene el ícono basado en el id

            return (
              <ButtonBase
                key={method.id} // Asegúrate de usar una key única
                className="bg-white text-black inline-flex justify-end items-center gap-4 px-6 mt-4"
                height="h-[60px] sm:h-[50px] md:h-[60px] md:w-[300px] lg:h-[60px] lg:w-[800px] xl:h[60px] 4xl:h-[60px]"
                borderColor="box-border border-black border-[10px]"
                // onClick={handlePayment}
              >
                {MethodIcon && <MethodIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-16 lg:h-8" />}
                <div className="flex-1 text-left">{method.method_name}</div>
                <ArrowIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-16 lg:h-8" />
              </ButtonBase>
            );
          })}
        </div>
      ),
    },
    {
      id: 'col2',
      content: (
        <div className="w-full mt-1 lg:mt-0">
          espacio para resumen con total precio
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
      <MultiColumnLayout columns={columnsPay} />
    </div>
  </div>
  );
}

export default TicketPaymentQR;