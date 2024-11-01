import React from 'react';

type IconProps = {
  className?: string;
};

const Down: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  
  );
};

export default Down;