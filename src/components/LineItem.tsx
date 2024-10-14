import React from 'react';
import ButtonLink from './ButtonLink';
import ArrowIcon from '@/assets/icons/flecha-icon';

type LineItemProps = {
  id: string;
  lineName: string;
};

const LineItem: React.FC<LineItemProps> = ({ id, lineName }) => {
  const getCircleColor = (lineId: string) => {
    switch (lineId) {
      case `${lineId}`:
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <ButtonLink to={`/kiosk/linea/${id}/destination/`} className="bg-white text-black h-[70px] sm:h-[82px] flex items-center justify-between px-4">
      <div className={`flex items-center justify-center ${getCircleColor(id)} rounded-full h-10 w-10 sm:h-12 sm:w-12`}></div>
      <div className="flex-1 text-left">
        {lineName}
      </div>
      <ArrowIcon className='h-5 w-5 text-black sm:h-6 sm:w-6' />
    </ButtonLink>
  );
};

export default LineItem;