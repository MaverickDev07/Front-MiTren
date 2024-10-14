import DateTimeDisplay from "@/components/DateTimeDisplay";
import ButtonHome from "@/components/ButtonHome";

const HomeReposePage = () => {


  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <DateTimeDisplay fontSize="text-4xl sm:text-8xl" />
        <ButtonHome to="/kiosk" className="hover:text-white mt-4 text-lg sm:text-xl">
          PRESIONE PARA EMPEZAR
        </ButtonHome>
      </div>
    </div>
  );
}

export default HomeReposePage;