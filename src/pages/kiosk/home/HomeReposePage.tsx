import DateTimeDisplay from "@/components/DateTimeDisplay";
import ButtonHome from "@/components/ButtonHome";
import MiTrenLogo from "@/assets/brand/mitren-logo.webp";

const HomeReposePage = () => {
  return (
    <ButtonHome to="/kiosk/menu" className="hover:text-white mt-4 text-lg sm:text-xl">
      <div className="w-full flex flex-col justify-center items-center min-h-screen relative">
        <DateTimeDisplay fontSize="text-4xl sm:text-6xl et1291:text-5xl lg:text-8xl" flex="justify-center" />
        <img src={MiTrenLogo} alt="Mi Tren Logo" className="w-20 h-20 sm:w-24 sm:h-24 mb-2" />
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl et1291:text-lg">"Frase Institucional"</div>
        <div className="text-lg sm:text-xl et1291:text-lg">PRESIONE PARA EMPEZAR</div>
      </div>
    </ButtonHome>
  );
};

export default HomeReposePage;