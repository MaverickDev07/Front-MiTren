import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';
import NFC from "@/assets/brand/image.png";


const ReloadPage = () => {

  const handleClearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <div>
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title='Comprar Ticket - QR'/>
      </div>
      <div className="fixed md:bottom-[100px] left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-circle2 bg-cover
      md:h-[25rem] md:w-[45rem] lg:h-[70rem] lg:w-[130rem] flex items-start justify-center pt-4 text-center">
      </div>
      <div className="relative w-full lg:px-20 xl:px-[101px] flex flex-col items-center">
          <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl text-white uppercase mb-4">ACERQUE SU TARJETA</h2>
          <h2 className="font-bold text-3xl md:text-2xl lg:text-4xl text-white uppercase mb-4">AL SENSOR</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 justify-items-center">
          <div className="border-0 p-6 rounded-[44px] sm:h-64 md:h-72 md:w-72 lg:h-[35rem] lg:w-[35rem] flex flex-col justify-center items-center">
            <img src={NFC} alt="Código QR" className='h-[100%]' />
          </div>
          <ButtonLink
            to="/kiosk/menu"
            className="bg-red-600 text-black inline-flex justify-end items-center gap-4 px-6 mt-4" 
            height="h-[60px] md:h-[60px] md:w-[300px] lg:h-[100px] lg:w-[560px]"
            backgroundColor="bg-red-600"
            borderColor="box-border border-black border-[10px]"
            onClick={handleClearLocalStorage}
          >
            <div className="flex-1 text-center text-white md:text-2xl lg:text-4xl">Cancelar</div>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ReloadPage