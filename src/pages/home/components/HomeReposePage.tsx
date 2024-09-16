import DateTimeDisplay from "@/components/DateTimeDisplay.tsx";
import BackgroundEffect from "@/components/BackgroundEffect"
import { useLocation } from "react-router"
import ButtonLink from "@/components/ButtonLink";

const HomeReposePage = () => {
  const location = useLocation()
  const path = location.pathname
  const unnotted = path !== '/'

  return (
    <div className="relative z-10 text-white">
      <BackgroundEffect unnotted={unnotted} width="w-14" />
        <DateTimeDisplay fontSize="text-8xl" />        
        <ButtonLink to="/menu" fontSize="text-lg" fontFamily="font-sans">
        PRESIONE PARA EMPEZAR
      </ButtonLink>
    </div>
  );
}

export default HomeReposePage;