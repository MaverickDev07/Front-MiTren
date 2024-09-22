import BackgroundEffect from "@/components/BackgroundEffect";
import TicketResume from "../components/TicketResume";
import TicketNumberItem from "../../tickets/components/TicketNumberItem";
import { useLocation } from "react-router";
import NavigatorTop from "@/components/NavigatorTop";

const TicketNumberPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';

  return (
    <div className="container flex flex-col gap-6 mx-auto pt-8 px-4">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop />
      </div>
      <div className="w-full lg:px-20 xl:px-[101px]">
        <BackgroundEffect unnotted={unnotted} />
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col w-full lg:w-[508px] gap-4 flex-shrink-0">
            <TicketNumberItem />
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <TicketResume />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketNumberPage;