import MiTrenLogo from "@/assets/brand/mitren-logo.webp";
import BackgroundEffect from "@/components/BackgroundEffect";
import ButtonLink from '@/components/ButtonLink';
import { useLocation } from "react-router";
// import DateTimeDisplay from "@/components/DateTimeDisplay";
// import Circulo from "@/assets/brand/circle.svg";
// import DateTimeDisplay2 from "@/components/DateTimeDisplay2";

const HomeMenu = () => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center">
      <BackgroundEffect unnotted={unnotted} />
      <div className="relative z-10 flex flex-col justify-center items-center p-4 text-center">
        <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-24 h-24 sm:w-36 sm:h-36 mb-6" />
        <div className="flex flex-col gap-4 w-full sm:w-96 mb-10">
          <ButtonLink to="/linea" className="bg-white h-[70px] sm:h-[82px]">
            COMPRAR TICKET
          </ButtonLink>
        </div>
      </div>
      {/* <DateTimeDisplay2 fontSize="text-4xl sm:text-8xl" />
      <div className="relative z-0 mb-8 animate-spin-slow">
        <img src={Circulo} alt="circulo"/>
      <div className="text-white text-center relative z-10"> 
        <DateTimeDisplay />
      </div>
      </div> */}
    </div>
  );
}

export default HomeMenu;
