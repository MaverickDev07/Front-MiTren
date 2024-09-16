import ButtonBase from "@/components/ButtonBase"

const TicketNumberItem = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 pt-2 pb-4 bg-white rounded-[44px]">
      <h3 className="font-black text-3xl">
        General
      </h3>
      <div className="w-full flex justify-between items-center">
        <ButtonBase className="w-[120px]">
          <span className="text-[64px] -mt-[8px]">-</span>
        </ButtonBase>
        <div className="font-bold text-[64px]">0</div>
        <ButtonBase className="w-[120px]">
          <span className="text-[64px] -mt-[8px]">+</span>
        </ButtonBase>
      </div>
    </div>
  )
}

export default TicketNumberItem
