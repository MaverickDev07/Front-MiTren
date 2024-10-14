import MiTrenLogo from "@/assets/brand/mitren-logo.webp";
import ButtonLink from '@/components/ButtonLink';

const HomeMenu = () => {



  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center pt-10">
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center">
          <div className="p-6 text-white w-full sm:w-96">
            <div className="relative z-10 flex flex-col justify-center items-center p-4 text-center">
              <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-24 h-24 sm:w-36 sm:h-36 mb-14 mt-10 " />
              <div className="flex flex-col items-center gap-24 w-full sm:w-96 mb-10">
                <ButtonLink to="/kiosk/linea" className="bg-white h-[70px] sm:h-[82px] w-full text-center">
                  COMPRAR TICKET
                </ButtonLink>
                <ButtonLink to="" className="bg-white h-[70px] sm:h-[82px] w-full text-center">
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
