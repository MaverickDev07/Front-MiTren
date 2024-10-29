import { RoundIcon } from "@/assets/icons";
import ButtonBase from "@/components/ButtonBase";

const TicketNumberItem = ({ count, onIncrement, onDecrement, customerType, basePrice }) => {
  const bgColor = 
  customerType === 'GENERAL' ? 'text-blue-900'
  : customerType === 'ESTUDIANTES' ? 'text-orange-500' 
  : customerType === 'PREFERENCIAL' ? 'text-purple-500'
  : customerType === 'PROMOCION' ? 'text-blue-900'
  : 'text-gray-100';

  return (
    <div className="container px-4 mx-auto bg-white rounded-[44px] flex items-center justify-between lg:gap-4 md:gap-2">
      <div className="flex-shrink-0">
        <ButtonBase onClick={onDecrement} borderColor="border-black border-[10px]">
          <span className="text-black text-[50px] font-bold">-</span>
        </ButtonBase>
      </div>
      <div className="flex flex-col items-center mx-auto">
        <h3 className={`font-black ${bgColor} text-base sm:text-xs md:text-xs lg:text-3xl md:py-[4px] lg:py-[2px] ml-2`}>{customerType}</h3>
        <div className={`font-bold ${bgColor} text-base sm:text-xs md:text-3xl lg:text-[64px] md:py-[4px] lg:py-6`}>{count}</div>
      </div>
      <div className="flex-shrink-0">
        <ButtonBase onClick={onIncrement} borderColor="border-black border-[10px]">
          <span className="text-black text-[50px] font-bold">+</span>
        </ButtonBase>
      </div>
      <div className="flex flex-col items-center mx-auto hidden lg:block">
      <RoundIcon width="125" height="125"/>
      </div>
      <div className="flex flex-col items-center mx-auto">
        <h3 className="font-black text-base sm:text-sm md:text-sm lg:text-3xl text-blue-600">{basePrice} bs</h3>
        <h3 className="font-black text-base sm:text-xs md:text-xs lg:text-2xl text-blue-600">por ticket</h3>
      </div>
    </div>
  );
};

export default TicketNumberItem;
