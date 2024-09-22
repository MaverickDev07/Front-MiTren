import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import BackgroundEffect from "@/components/BackgroundEffect";
import { mockApiResponse } from "@/services/mockApiLine";
import { MenuIcon } from '@/assets/icons/menu-icon';
import ButtonLink from '@/components/ButtonLink';
import mapa from "@/assets/brand/mapa.svg";

const DestinationPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';
  const [line, setLine] = useState<{ id: string; line_name: string } | null>(null);

  useEffect(() => {
    const fetchLines = async () => {
      const response = await new Promise<{ lines: { id: string; line_name: string }[] }>((resolve) => {
        setTimeout(() => {
          resolve(mockApiResponse);
        }, 500);
      });
      if (response.lines.length > 0) {
        setLine(response.lines[0]);
      }
    };

    fetchLines();
  }, []);

  return (
    <div className="container flex flex-col gap-6 mx-auto pt-8 px-4">
    <div className="w-full lg:px-20 xl:px-[101px]">
      <div className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="flex items-center gap-4 sm:gap-9">
        <ButtonLink to="/" className="flex items-center">
          <MenuIcon className="w-2 h-4 sm:w-8 sm:h-8" />
          <span className="text-sm sm:text-base">Menu</span>
        </ButtonLink>
        <h2 className="font-bold text-2xl sm:text-4xl text-white uppercase">
        Comprar Ticket - Destino
        </h2>
        <div className="flex items-center justify-center gap-4">
        {line && (
            <>
              <div className={`flex items-center justify-center bg-red-500 rounded-full h-10 w-10 sm:h-12 sm:w-12`}></div>
              <span className="font-bold text-xl sm:text-2xl text-white">{line.line_name}</span>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
      <div className="w-full lg:px-20 xl:px-[101px]">
        <BackgroundEffect unnotted={unnotted} />
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col w-full lg:w-[508px] gap-4 flex-shrink-0">
        <ButtonLink to='/linea/destination/tickets' className="bg-white text-black h-[70px] sm:h-[82px] flex items-center justify-between px-4">
          <div className="flex-1 text-left">
            Estación Central S.A.
          </div>
          <svg className="h-5 w-5 text-black sm:h-6 sm:w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <line x1="5" y1="12" x2="19" y2="12" />  
            <line x1="13" y1="18" x2="19" y2="12" />  
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg>
        </ButtonLink>
          </div>
          <div className="w-full mt-4 lg:mt-0">
            <img src={mapa} alt="mapa"/>
          </div>
        </div>
        <h3 className="font-bold text-2xl sm:text-4xl text-white">Mas destinos</h3>
        <div className='text-center font-Inconsolata font-bold text-white text-[40px]'>
          <h3 className="">Estacion Antigua Cbba</h3>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;