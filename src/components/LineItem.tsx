import React from 'react';
import ButtonLink from './ButtonLink';

type LineItemProps = {
  id: string;
  lineName: string;
};

const LineItem: React.FC<LineItemProps> = ({ id, lineName }) => {
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
    <ButtonLink to={`/linea/destination/${id}`} className="bg-white text-black h-[70px] sm:h-[82px] flex items-center justify-between px-4">
      <div className={`flex items-center justify-center ${getCircleColor(id)} rounded-full h-10 w-10 sm:h-12 sm:w-12`}></div>
      <div className="flex-1 text-left">
        {lineName}
      </div>
      <svg className="h-5 w-5 text-black sm:h-6 sm:w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
        <path stroke="none" d="M0 0h24v24H0z"/>  
        <line x1="5" y1="12" x2="19" y2="12" />  
        <line x1="13" y1="18" x2="19" y2="12" />  
        <line x1="13" y1="6" x2="19" y2="12" />
      </svg>
    </ButtonLink>
  );
};

export default LineItem;