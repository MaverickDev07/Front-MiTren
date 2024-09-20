import BackgroundEffect from "@/components/BackgroundEffect"
import TicketResume from "../components/TicketResume"
import TicketNumberItem from "../../tickets/components/TicketNumberItem"
import { useLocation } from "react-router"

const TicketNumberPage  = () => {
  const location = useLocation()
  const path = location.pathname
  const unnotted = path !== '/'
  return (
    <>
    <BackgroundEffect unnotted={unnotted} />
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
