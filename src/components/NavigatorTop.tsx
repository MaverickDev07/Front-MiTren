import ButtonLink from "./ButtonLink";
import { MenuIcon } from "@/assets/icons";

const NavigatorTop = () => {
  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex items-center justify-end ml-auto">
        <ButtonLink to="/kiosk/menu" height="h-[60px] sm:h-[40px] md:h-[40px] lg:h-[60px] xl:h[60px] 4xl:h-[60px]">
          <MenuIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h4 lg:w-8 lg:h-8" />
          <span className="text-base sm:text-xs md:text-xs lg:text-lg ml-2">Menu</span>
        </ButtonLink>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <h2 className="font-bold text-2xl sm:text-4xl text-white uppercase">
          Comprar Ticket
        </h2>
      </div>
    </div>
  );
};

export default NavigatorTop;

