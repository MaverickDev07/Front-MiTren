import BackgroundEffect from "@/components/BackgroundEffect";
import ButtonLink from '@/components/ButtonLink';
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { mockApiResponse } from "@/services/mockApiLine";

const LinePage = () => {
  const location = useLocation();
  const path = location.pathname;
  const unnotted = path !== '/';
  
  const [lines, setLines] = useState<{ id: string; line_name: string }[]>([]);

  useEffect(() => {
    const fetchLines = async () => {
      const response = await new Promise<{ lines: { id: string; line_name: string }[] }>((resolve) => {
        setTimeout(() => {
          resolve(mockApiResponse);
        }, 500);
      });
      setLines(response.lines);
    };

    fetchLines();
  }, []);

  const getCircleColor = (lineId: string) => {
    switch (lineId) {
      case '66c0bb4a92e47eb2f5e913f2':
        return 'bg-red-500';
      case '66eadc75d2f8c32e890d417f':
        return 'bg-yellow-500';
      case '66eadc81d2f8c32e890d4181':
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="w-full min-h-screen">
      <BackgroundEffect unnotted={unnotted} />
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <h2 className="font-bold text-3xl sm:text-4xl text-white uppercase mb-8">Elija una Línea</h2>
        <div className="flex flex-col gap-4 w-full sm:w-96">
          {lines.map(line => (
            <ButtonLink key={line.id} to='destination' className="bg-white text-black h-[70px] sm:h-[82px] flex items-center justify-between px-4">
              <div className={`flex items-center justify-center ${getCircleColor(line.id)} rounded-full h-10 w-10 sm:h-12 sm:w-12`}></div>
              <div className="flex-1 text-left">
                {line.line_name}
              </div>
              <svg className="h-5 w-5 text-black sm:h-6 sm:w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  
                <line x1="5" y1="12" x2="19" y2="12" />  
                <line x1="13" y1="18" x2="19" y2="12" />  
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </ButtonLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinePage;