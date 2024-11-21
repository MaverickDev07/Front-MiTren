import { useLocation } from 'react-router-dom';
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';


const CreditPage = () => {
  const location = useLocation();
  const payQr = location.state || {};

  const handleClearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <div>
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title='SALDO TARJETA NFC'/>
      </div>
      {/* Elemento en la parte inferior */}
      <div className="fixed md:bottom-[100px] left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-circle2 bg-cover
      md:h-[25rem] md:w-[45rem] lg:h-[70rem] lg:w-[130rem] flex items-start justify-center pt-4 text-center">
      </div>
      <div className="relative w-full lg:px-20 xl:px-[101px] flex flex-col items-center">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white uppercase mb-4">Saldo actual (Bs): 100 {payQr.monto}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 justify-items-center">
          <div className="border-0 p-6 rounded-[44px] sm:h-64 md:h-72 md:w-72 lg:h-[35rem] lg:w-[35rem] flex flex-col justify-center items-center">
            <ButtonLink
              to="/kiosk/creditNFC/rechargeCard"
              className="text-black inline-flex justify-end items-center gap-4 px-6 sm:mt-[20rem] lg:mt-[30rem]" 
              height="h-[60px] md:h-[80px] md:w-[250px] lg:h-[100px] lg:w-[560px]"
              borderColor="box-border border-black border-[10px]"
              onClick={handleClearLocalStorage}
            >
              <div className="flex-1 text-center text-black md:text-2xl lg:text-4xl">Regacargar tarjeta</div>
            </ButtonLink>
            <ButtonLink
              to="/kiosk"
              className="bg-red-600 text-black inline-flex justify-end items-center gap-8 px-6 sm:mt-[5rem] lg:mt-[10rem]" 
              height="h-[60px] md:h-[60px] md:w-[250px] lg:h-[100px] lg:w-[560px]"
              backgroundColor="bg-red-600"
              borderColor="box-border border-black border-[10px]"
              onClick={handleClearLocalStorage}
            >
              <div className="flex-1 text-center text-white md:text-2xl lg:text-4xl">Cancelar</div>
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CreditPage;

