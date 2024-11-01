import React from 'react';

type IconProps = {
  className?: string;
};

const Check: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
    className={className}
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    >
    <path stroke="none" d="M0 0h24v24H0z"/>
    <path d="M5 12l5 5l10 -10" />
    </svg>
  );
};

export default Check;




