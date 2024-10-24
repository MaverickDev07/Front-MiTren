import ButtonBase from "@/components/ButtonBase";

const TicketNumberItem = ({ count, onIncrement, onDecrement, basePrice, customerType }) => {
  return (
    <>
      <div className="w-full flex flex-col items-center px-4 pt-2 pb-4 bg-white rounded-[44px]">
        <h3 className="font-black text-3xl">{customerType}</h3>
        <div className="w-full flex justify-between items-center">
          <ButtonBase className="w-[120px]" onClick={onDecrement}>
            <span className="text-[64px] -mt-[8px]">-</span>
          </ButtonBase>
          <div className="font-bold text-[64px]">{count}</div>
          <ButtonBase className="w-[120px]" onClick={onIncrement}>
            <span className="text-[64px] -mt-[8px]">+</span>
          </ButtonBase>
          <h3 className="font-black text-2xl">{basePrice}bs</h3>
        </div>
      </div>
    </>
  );
};

export default TicketNumberItem;
