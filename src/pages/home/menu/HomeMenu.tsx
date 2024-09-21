import MiTrenLogo from "@/assets/brand/mitren-logo.webp";
import BackgroundEffect from "@/components/BackgroundEffect";
import ButtonLink from '@/components/ButtonLink';
import { useLocation } from "react-router";

const HomeMenu = () => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';

  return (
    <div className="w-full min-h-screen">
      <BackgroundEffect unnotted={unnotted} />
      <div className="w-full flex flex-col justify-center items-center p-4">
        <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-24 h-24 sm:w-36 sm:h-36 my-10" />
        <div className="flex flex-col gap-4 w-full sm:w-96">
          <ButtonLink to="/linea" className="bg-white h-[70px] sm:h-[82px]">
            COMPRAR TICKET
          </ButtonLink>
          <ButtonLink to="/tarjetanfc" className="bg-white h-[70px] sm:h-[82px]">
            RECARGAR TARJETA NFC
          </ButtonLink>
          <ButtonLink to="/transbordo" className="bg-white h-[70px] sm:h-[82px]">
            TRANSBORDO
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default HomeMenu;
