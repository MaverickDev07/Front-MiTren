import React from 'react';

interface IconProps {
  width?: string;
  height?: string;
  className?: string;
}

const RoundIcon: React.FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 121 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <mask
          id="mask0_151_17979"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="-25"
          width="173"
          height="173"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M172.133 61.1318C172.133 13.6353 133.629 -24.8682 86.1328 -24.8682C38.6363 -24.8682 0.132807 13.6353 0.132809 61.1318C0.132811 108.628 38.6363 147.132 86.1328 147.132C133.629 147.132 172.133 108.628 172.133 61.1318ZM161.975 61.1318C161.975 19.2452 128.019 -14.7107 86.1328 -14.7107C44.2461 -14.7107 10.2903 19.2452 10.2903 61.1318C10.2903 103.019 44.2461 136.974 86.1328 136.974C128.019 136.974 161.975 103.018 161.975 61.1318Z"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_151_17979)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M172.133 61.1318C172.133 13.6353 133.629 -24.8682 86.1328 -24.8682C38.6363 -24.8682 0.132807 13.6353 0.132809 61.1318C0.132811 108.628 38.6363 147.132 86.1328 147.132C133.629 147.132 172.133 108.628 172.133 61.1318ZM161.975 61.1318C161.975 19.2452 128.019 -14.7107 86.1328 -14.7107C44.2461 -14.7107 10.2903 19.2452 10.2903 61.1318C10.2903 103.019 44.2461 136.974 86.1328 136.974C128.019 136.974 161.975 103.018 161.975 61.1318Z"
            fill="#D9D9D9"
          />
          <path d="M-36.5684 187.964L-171.867 52.6649L-33.5618 -85.6407L101.737 49.6582L-36.5684 187.964Z" fill="#0691E4" />
          <path d="M90.7129 60.1814L-112.236 -6.96691L68.6641 -187.867L267.604 11.0729L90.7129 60.1814Z" fill="#804591" />
          <path d="M194.442 340.801L-4.49726 141.861L81.6932 55.6708L309.697 225.546L194.442 340.801Z" fill="#FBE711" />
          <path d="M-34.5639 171.928L64.1543 270.646L81.693 55.6714L-34.5639 171.928Z" fill="#03A116" />
        </g>
      </g>
    </svg>
  );
};

export default RoundIcon;

