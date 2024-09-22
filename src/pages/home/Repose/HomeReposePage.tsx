import DateTimeDisplay from "@/components/DateTimeDisplay";
import BackgroundEffect from "@/components/BackgroundEffect";
import { useLocation } from "react-router";
import ButtonHome from "@/components/ButtonHome";

const HomeReposePage = () => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';

  return (
    <div className="relative z-10 text-white p-4">
      <BackgroundEffect unnotted={unnotted} />
      <div className="flex flex-col items-center">
        <DateTimeDisplay fontSize="text-4xl sm:text-8xl" />
        <ButtonHome to="/" className="hover:text-white mt-4 text-lg sm:text-xl">
          PRESIONE PARA EMPEZAR
        </ButtonHome>
      </div>
    </div>
  );
}

export default HomeReposePage;