import TicketResume from "../components/TicketResume"
import TicketNumberItem from "./components/TicketNumberItem"

const TicketNumberPage  = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[600px] flex-shrink-0">
          <div className="w-full flex flex-col gap-4 lg:w-[508px]">
            <TicketNumberItem />
            <TicketNumberItem />
            <TicketNumberItem />
          </div>
        </div>
        <div className="w-full">
          <TicketResume />
        </div>

      </div>
    </>
  )
}

export default TicketNumberPage
