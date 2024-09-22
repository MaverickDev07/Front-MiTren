import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import BackgroundEffect from "@/components/BackgroundEffect";
import { mockApiResponse } from "@/services/mockApiLine";
import { MenuIcon } from '@/assets/icons/menu-icon';
import ButtonLink from '@/components/ButtonLink';

const VerificationQR = () => {
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
    <div className="container flex flex-col gap-6 mx-auto pt-8 px-4 min-h-screen justify-center items-center">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4">
          <div className="flex items-center gap-4 sm:gap-9">
            <ButtonLink to="/" className="flex items-center">
              <MenuIcon className="w-2 h-4 sm:w-8 sm:h-8" />
              <span className="text-sm sm:text-base">Menu</span>
            </ButtonLink>
            <h2 className="font-bold text-2xl sm:text-4xl text-white uppercase">
              Comprar Ticket
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
      <div className="w-full lg:px-20 xl:px-[101px] flex flex-col items-center">
        <BackgroundEffect unnotted={unnotted} />
        <div className="flex flex-col items-center justify-center text-center">
          <div className='text-center font-Inconsolata font-bold text-white text-[40px]'>
            <h3 className="">Transacción exitosa</h3>
            <svg className="h-56 w-56 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>
        <h3 className="font-bold text-2xl sm:text-4xl text-white mt-4">Retire su ticket</h3>
        <svg className="h-8 w-8 text-black-700 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
};

export default VerificationQR;