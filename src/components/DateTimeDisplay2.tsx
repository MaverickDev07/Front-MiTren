import React, { useEffect, useState } from 'react';

type DateTimeDisplayProps = {
  fontSize?: string;
};

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ fontSize = "text-4xl" }) => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const updateDateTime = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    const formattedTime = now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setTime(formattedTime);
    setDate(formattedDate);
  };

  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <svg width="690" height="219" viewBox="0 0 690 219" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_318_4424" maskUnits="userSpaceOnUse" x="0" y="0" width="690" height="690">
        <path fillRule="evenodd" clipRule="evenodd" d="M345 690C535.538 690 690 535.538 690 345C690 154.462 535.538 0 345 0C154.462 0 0 154.462 0 345C0 535.538 154.462 690 345 690ZM345 673C526.149 673 673 526.149 673 345C673 163.851 526.149 17 345 17C163.851 17 17 163.851 17 345C17 526.149 163.851 673 345 673Z" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_318_4424)">
        <path fillRule="evenodd" clipRule="evenodd" d="M345 690C535.538 690 690 535.538 690 345C690 154.462 535.538 0 345 0C154.462 0 0 154.462 0 345C0 535.538 154.462 690 345 690ZM345 673C526.149 673 673 526.149 673 345C673 163.851 526.149 17 345 17C163.851 17 17 163.851 17 345C17 526.149 163.851 673 345 673Z" fill="#D9D9D9"/>
        {/* Otros colores y formas */}
        <text x="345" y="100" fontSize="72px" fill="white" textAnchor="middle" dominantBaseline="middle" className={`${fontSize} font-bold`}>{time}</text>
        <text x="345" y="160" fontSize="24px" fill="white" textAnchor="middle" dominantBaseline="middle">{date}</text>
      </g>
    </svg>
  );
};

export default DateTimeDisplay;