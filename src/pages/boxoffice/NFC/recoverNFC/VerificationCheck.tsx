import { Check } from '@/assets/icons';
import Down from '@/assets/icons/Down';
import NavigatorTop from '@/components/NavigatorTop';
import { useLocation } from 'react-router';

const VerificationQR = () => {
  const location = useLocation();

  const data = location.state

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title='RECUPERAR TARJETA NFC' LinkTo='/boleteria'/>
      </div>
      <div className="w-full xl:px-[101px] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center text-center">
            <h3 className="font-Inconsolata text-2xl sm:text-5xl text-white uppercase p-8">Recuperacion exitosa</h3>
            <Check className='sm:h-[13rem] sm:w-[13rem] lg:h-[15rem] lg:w-[15rem] text-emerald-500 p-10'/>
            
            <div className="lg:w-[800px] md:w-[300px] h-full border-2 border-black p-6 font-mono bg-white rounded-[44px]">
              <h2 className="text-center sm:text-xs md:text-xs lg:text-2xl font-bold mb-4">
                DETALLE VENTA RECUPERACION NFC
              </h2>
              <div className="border-b-2 border-dotted border-black mb-4"></div>
              <div>
                <div className="flex justify-between sm:text-xs md:text-xs lg:text-2xl mb-4">
                  <span>Nombre completo: {data.Nombre}</span>
                </div>
                <div className="flex justify-between sm:text-xs md:text-xs lg:text-2xl mb-4">
                  <span>Numero de documento: {data.Documento}</span>
                </div>
                <div className="flex justify-between sm:text-xs md:text-xs lg:text-2xl mb-4">
                  <span>Saldo: {data.Costo} Bs</span>
                </div>
              </div>
            </div>
        </div>
        <h3 className="font-bold text-2xl sm:text-5xl text-white mt-8">Retire su ticket</h3>
        <Down className='sm:h-10 sm:w-10 lg:h-20 lg:w-20 text-white p-1'/>
      </div>
    </div>
  );
};

export default VerificationQR;