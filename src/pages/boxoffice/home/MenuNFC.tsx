import MiTrenLogo from "@/assets/brand/mitren-logo.webp";
import ButtonLink from '@/components/ButtonLink';
import DateTimeDisplay from "@/components/DateTimeDisplay";

const MenuNFC = () => {



  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center pt-4 bg-mitren-primary bg-doodle bg-cover">
        <div className="flex flex-col items-center">
        <div className="fixed top-0 -left-2 min-h-screen w-1/4 sm:w-24 md:w-48 lg:w-64 4xl:w-64 bg-pattern-left bg-cover bg-right-bottom transition duration-75"></div>
        <div className="fixed top-0 -right-2 min-h-screen w-1/4 sm:w-24 md:w-48 lg:w-64 4xl:w-64 bg-pattern-right bg-cover bg-left-bottom transition duration-75"></div>  
          <div className="p-4 text-white w-full sm:w-80 md:w-96 flex flex-col justify-center items-center">
              <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-48 lg:h-48 mb-4" />
            <div className="flex flex-col items-center w-full md:mb-[5rem] md:gap-6 lg:mb-[10rem] lg:gap-12">
                <ButtonLink to="/boleteria/Verify" className="bg-white w-full text-center" height = "h-[60px] md:h-[50px] lg:h-[80px] 4xl:h-[100px]">
                  VERIFICAR SALDO
                </ButtonLink>
                <ButtonLink to="/boleteria/ReloadPage" className="bg-white w-full text-center" height = "h-[60px] md:h-[50px] lg:h-[80px] 4xl:h-[100px]">
                  RECARGAR TARJETA
                </ButtonLink>
                <ButtonLink to="/boleteria/payNFC" className="bg-white w-full text-center" height = "h-[60px] md:h-[50px] lg:h-[80px] 4xl:h-[100px]">
                  VENTA DE TARJETA NFC
                </ButtonLink>
                <ButtonLink to="/boleteria/recover" className="bg-white w-full text-center" height = "h-[60px] md:h-[50px] lg:h-[80px] 4xl:h-[100px]">
                  RECUPERACION DE TARJETA
                </ButtonLink>
            </div>
            <div className="fixed">
              <DateTimeDisplay fontSize="text-4xl md:text-5xl lg:text-7xl" flex="items-center justify-end"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default MenuNFC;