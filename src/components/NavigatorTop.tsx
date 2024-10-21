import MiTrenLogo from "@/assets/brand/mitren-logo.webp";
import ButtonLink from "./ButtonLink";
import { MenuIcon } from "@/assets/icons";

const NavigatorTop = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="flex items-center gap-4 sm:gap-9">
        <ButtonLink to="/kiosk/menu" className="flex items-center">
          <MenuIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-sm sm:text-base">Menu</span>
        </ButtonLink>
        <h2 className="font-bold text-2xl sm:text-4xl text-white uppercase">
          Comprar Ticket
        </h2>
      </div>
      <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
    </div>
  );
};

export default NavigatorTop;

