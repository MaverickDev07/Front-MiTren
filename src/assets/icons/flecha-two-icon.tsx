import React from 'react';

type IconProps = {
  className?: string;
};

const ArrowIcon1: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
    className={className}
    viewBox="0 0 24 24"  fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    >
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </svg>
  );
};

export default ArrowIcon1;