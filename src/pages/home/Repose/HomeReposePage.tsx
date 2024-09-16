import DateTimeDisplay from "@/components/DateTimeDisplay.tsx";
import Train from "@/assets/brand/train.svg";
const HomeReposePage = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-between bg-gray-800 p-4"
      style={{
        backgroundImage:`url(${Train})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex-grow flex flex-col justify-center items-center">
        <DateTimeDisplay />
      </div>
      <div className="text-2xl font-semibold text-center text-slate-50 mb-4">
        <p>PRESIONE PARA EMPEZAR</p>
      </div>
    </div>
  );
}

export default HomeReposePage;