import React from 'react';

type IconProps = {
  className?: string;
};

const ArrowIcon2: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
    className={className}
    viewBox="0 0 24 24"  fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    >
      <polyline points="11 17 6 12 11 7" />
      <polyline points="18 17 13 12 18 7" />
    </svg>
  );
};

export default ArrowIcon2;