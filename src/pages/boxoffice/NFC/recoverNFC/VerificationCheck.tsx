import { Check } from '@/assets/icons';
import Down from '@/assets/icons/Down';
import NavigatorTop from '@/components/NavigatorTop';

const VerificationQR = () => {

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title='RECARGAR TARJETA NFC' LinkTo='/boleteria'/>
      </div>
      <div className="w-full lg:p-20 xl:px-[101px] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center text-center">
            <h3 className="font-Inconsolata text-2xl sm:text-5xl text-white uppercase p-8">Transacción exitosa</h3>
            <h3 className="font-Inconsolata text-2xl sm:text-5xl text-white uppercase p-8">SALDO ACTUAL: BS. 20 </h3>
            <Check className='sm:h-[13rem] sm:w-[13rem] lg:h-[20rem] lg:w-[20rem] text-emerald-500 p-10'/>
        </div>
        <h3 className="font-bold text-2xl sm:text-5xl text-white mt-8">Retire su ticket</h3>
        <Down className='sm:h-10 sm:w-10 lg:h-20 lg:w-20 text-white p-1'/>
      </div>
    </div>
  );
};

export default VerificationQR;