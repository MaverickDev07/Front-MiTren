import DateTimeDisplay from "@/components/DateTimeDisplay.tsx";
import BackgroundEffect from "@/components/BackgroundEffect"
import { useLocation } from "react-router"
import ButtonHome from "@/components/ButtonHome";

const HomeReposePage = () => {
  const location = useLocation()
  const path = location.pathname
  const unnotted = path !== '/'

  return (
    <div className="relative z-10 text-white">
      <BackgroundEffect unnotted={unnotted} />
      <div>
        <DateTimeDisplay fontSize="text-8xl" />       
        <ButtonHome to="/Menu" className="hover:text-white">
          PRESIONE PARA EMPEZAR
        </ButtonHome>
      </div>
    </div>
  );
}

export default HomeReposePage;