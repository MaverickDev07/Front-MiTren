import React from 'react';

type IconProps = {
  className?: string;
};

const ArrowIconR: React.FC<IconProps> = ({ className }) => {
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
    <path stroke="none" d="M0 0h24v24H0z"/>
    <line x1="5" y1="12" x2="19" y2="12" /> 
    <line x1="5" y1="12" x2="11" y2="18" />
    <line x1="5" y1="12" x2="11" y2="6" />
    </svg>
  );
};

export default ArrowIconR;