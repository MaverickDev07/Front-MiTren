import React from 'react';

type IconProps = {
  className?: string;
};

const ArrowIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      strokeWidth="2" 
      stroke="currentColor" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z"/>  
      <line x1="5" y1="12" x2="19" y2="12" />  
      <line x1="13" y1="18" x2="19" y2="12" />  
      <line x1="13" y1="6" x2="19" y2="12" />
    </svg>
  );
};

export default ArrowIcon;
