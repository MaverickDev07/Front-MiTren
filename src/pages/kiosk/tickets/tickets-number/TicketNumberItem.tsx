import CustomIcon from "@/assets/icons/Round-icon";
import ButtonBase from "@/components/ButtonBase";
import ButtonLink from "@/components/ButtonLink";

const TicketNumberItem = ({ count, onIncrement, onDecrement, basePrice, customerType }) => {
  return (
    <div className="w-full flex flex-col items-center px-4 pt-2 pb-4 bg-white rounded-[44px] "> 
    {/* h-[60px] sm:h-[50px] md:h-[50px] lg:h-[60px] xl:h[60px] 4xl:h-[60px] */} 
        <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
          <div className="w-full mt-4 lg:mt-0">
            <ButtonBase
            onClick={onDecrement}
            >
              <span className="text-[64px] -mt-[8px]">-</span>
            </ButtonBase>
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <h3 className="font-black text-3xl">{customerType}</h3>
            <div className="font-bold text-[64px]">{count}</div>
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <ButtonBase className="w-[120px]" onClick={onIncrement}>
              <span className="text-[64px] -mt-[8px]">+</span>
            </ButtonBase>
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <CustomIcon />
            <h3 className="font-black text-2xl">{basePrice} bs por ticket</h3>
          </div>
        </div>
        </div>
    </div>
  );
};

export default TicketNumberItem;
