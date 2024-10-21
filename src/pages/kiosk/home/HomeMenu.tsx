import MiTrenLogo from "@/assets/brand/mitren-logo.webp";
import ButtonLink from '@/components/ButtonLink';

const HomeMenu = () => {



  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center pt-4">
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <div className="p-4 text-white w-full sm:w-80 md:w-96">
          <div className="relative z-10 flex flex-col justify-center items-center p-4 text-center">
            <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-20 h-20 sm:w-24 sm:h-24 mb-4" />
            <div className="flex flex-col items-center gap-6 w-full mb-8">
              <ButtonLink to="/kiosk/destination" className="bg-white h-[60px] sm:h-[70px] w-full text-center">
                COMPRAR TICKET
              </ButtonLink>
              <ButtonLink to="" className="bg-white h-[60px] sm:h-[70px] w-full text-center">
                TARJETA NFC
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default HomeMenu;
