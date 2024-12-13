import { useLocation } from 'react-router-dom';
import NavigatorTop from "@/components/NavigatorTop";
import ButtonLink from '@/components/ButtonLink';
import ctvs010 from "@/assets/brand/0.10ctvs.png";
import ctvs020 from "@/assets/brand/0.20ctvs.png";
import ctvs050 from "@/assets/brand/0.50ctvs.png";
import bs1 from "@/assets/brand/1Bs.png";
import bs2 from "@/assets/brand/2Bs.png";
import bs5 from "@/assets/brand/5Bs.png";
import Bs10 from "@/assets/brand/10Bs.png";
import Bs20 from "@/assets/brand/20Bs.png";
import Bs50 from "@/assets/brand/50Bs.png";
import Bs100 from "@/assets/brand/100Bs.png";
import Bs200 from "@/assets/brand/200bs.png";
import MultiColumnLayout from '@/components/MultiColumnLayout';

const PaymentMoney = () => {
  const location = useLocation();
  const payQr = location.state || {};
  const monto = payQr.monto

  const handleClearLocalStorage = () => {
    localStorage.clear();
  };

  const columnsMoney = [
    {
      id: "col1",
      content: (
        <img src={Bs10} alt="10Bs" className='h-[100%]' />
      ),
    },
    {
      id: "col2",
      content: (
        <img src={Bs20} alt="20Bs" className='h-[100%]' />
      ),
    },
    {
      id: "col3",
      content: (
        <img src={Bs50} alt="50Bs" className='h-[100%]' />
      ),
    },
  ]
  const columnsMoney2 = [
    {
      id: "col1",
      content: (
        <img src={Bs100} alt="100Bs" className='lg:h-[50%] md:h-[35%]' />
      ),
    },
    {
      id: "col2",
      content: (
        <img src={Bs200} alt="200Bs" className='lg:h-[50%] md:h-[35%]' />  
      ),
    },
  ]

  const getFilteredColumns = () => {
    if (monto > 40) {
      return columnsMoney;
    } else if (monto > 10) {
      return columnsMoney.slice(0, 2);
    } else if (monto >= 6) {
      return columnsMoney.slice(0, 1);
    }
    return [];
  };

  const filteredColumns = getFilteredColumns();
  
  const getFilteredColumns2 = () => {
    if (monto > 190){
      return columnsMoney2;
    } else if (monto > 90) {
      return columnsMoney2.slice(0,1);
    }
    return [];
  };

  const filteredColumns2= getFilteredColumns2();

  return (
    <div className="w-full min-h-screen bg-mitren-primary bg-doodle bg-cover ">
      <div className="w-full md:px-20 lg:px-[101px]">
        <NavigatorTop title='Comprar Ticket - QR'/>
      </div>
      <div className="relative w-full md:px-20 xl:px-[101px] flex flex-col items-center">
          <h2 className="font-bold text-3xl md:text-sm lg:text-4xl text-white mb-4">"Colocar la moneda o el billete de mayor valor primero" Saldo a cancelar: {monto} Bs </h2>
          <h2 className="font-bold text-3xl md:text-sm lg:text-4xl text-white uppercase">
            {monto >=6
              ? "Ingrese el billete de mayor valor disponible primero: 10 - 20 - 50 - 100 - 200"
              : "Ingrese la modena de mayor valor primero"
            }
          </h2>
            <MultiColumnLayout columns={filteredColumns} flex='justify-items-center'/>
            <MultiColumnLayout columns={filteredColumns2} flex='justify-items-center'/>
          <div className='flex flex-col items-center fixed md:translate-y-[150%] lg:translate-y-[166%]'>
          <h2 className="font-bold text-3xl md:text-sm lg:text-3xl text-white uppercase">Ingrese monedas: 5 Bs - 2 Bs - 1 Bs - 0.50 ctvs - 0.20 ctvs - 0.10 ctvs</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 md:w-[42rem] lg:w-[84rem] gap-4 justify-items-center">
              <img src={bs5} alt="5Bs" className='lg:h-[70%] md:h-[60%]' />
              <img src={bs2} alt="2Bs" className='lg:h-[70%] md:h-[60%]' />
              <img src={bs1} alt="1Bs" className='lg:h-[70%] md:h-[60%]' />
              <img src={ctvs050} alt="0.50ctvs" className='lg:h-[70%] md:h-[60%]' />
              <img src={ctvs020} alt="0.20ctvs" className='lg:h-[70%] md:h-[60%]' />
              <img src={ctvs010} alt="0.10ctvs" className='lg:h-[70%] md:h-[60%]' />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 justify-items-center">
            <ButtonLink
              to="/kiosk/menu"
              className="text-black inline-flex justify-end items-center gap-4 px-6" 
              height="h-[60px] md:h-[60px] md:w-[200px] lg:h-[100px] lg:w-[560px]"
              backgroundColor="bg-red-600"
              borderColor="box-border border-black md:border-[5px] lg:border-[10px]"
              onClick={handleClearLocalStorage}
            >
              <div className="flex-1 text-center text-white md:text-lg lg:text-4xl">Cancelar</div>
            </ButtonLink>
          </div>
          </div>
      </div>
    </div>
    
  );
};

export default PaymentMoney;

