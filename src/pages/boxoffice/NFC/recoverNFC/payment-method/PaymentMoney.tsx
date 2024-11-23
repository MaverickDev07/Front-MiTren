import { useLocation, useNavigate } from "react-router-dom";
import NavigatorTop from "@/components/NavigatorTop";
import ButtonBase from "@/components/ButtonBase";

const PaymentMoney = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const payMoney = location.state?.data || {};

  const handleContinue = () => {
    navigate("/boleteria/RecoverCardNFC/RecoverPage/VerificationCheckNFC", { state: payMoney });
  };

  return (
    <div className="w-full min-h-screen bg-mitren-primary bg-doodle bg-cover">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title="VENTA TARJETA NFC - Efectivo" LinkTo="/boleteria/" />
      </div>
      <div className="fixed top-0 -left-2 min-h-screen xs:w-[2rem] sm:w-[3rem] md:w-[3rem] lg:w-[4rem] bg-pattern-left bg-cover bg-right-bottom transition duration-75"></div>
      <div className="fixed top-0 -right-2 min-h-screen xs:w-[2rem] sm:w-[3rem] md:w-[3rem] lg:w-[4rem] bg-pattern-right bg-cover bg-left-bottom transition duration-75"></div>
      <div className="fixed md:bottom-[100px] left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-circle2 bg-cover
      md:h-[25rem] md:w-[45rem] lg:h-[70rem] lg:w-[130rem] flex items-start justify-center pt-4 text-center"></div>
      <div className="relative w-full lg:px-20 xl:px-[101px] flex flex-col items-center">
        <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl text-white uppercase mb-4">Pago en Boletería</h2>
        <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl text-white uppercase mb-4">{payMoney?.Costo} Bs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 justify-items-center">
          <div className="border-0 p-6 rounded-[44px] sm:h-64 md:h-72 md:w-72 lg:h-[35rem] lg:w-[35rem] flex flex-col justify-center items-center">
            {/* Botón para continuar */}
            <ButtonBase
              onClick={handleContinue}
              className="text-black inline-flex justify-end items-center gap-4 px-6 mt-[12rem]"
              height="h-[60px] md:h-[60px] md:w-[300px] lg:h-[100px] lg:w-[560px]"
              backgroundColor="bg-green-600"
              borderColor="box-border border-black border-[10px]"
            >
              <div className="flex-1 text-center text-white md:text-2xl lg:text-4xl">Continuar</div>
            </ButtonBase>
            <ButtonBase
              onClick={() => navigate("/boleteria")}
              className="text-black inline-flex justify-end items-center gap-8 px-6 mt-[12rem]"
              height="h-[60px] md:h-[60px] md:w-[300px] lg:h-[100px] lg:w-[560px]"
              backgroundColor="bg-red-600"
              borderColor="box-border border-black border-[10px]"
            >
              <div className="flex-1 text-center text-white md:text-2xl lg:text-4xl">Cancelar</div>
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMoney;



