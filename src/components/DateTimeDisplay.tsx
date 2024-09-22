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
    <div className="flex flex-col items-center h-screen p-8 text-white"> 
      <div className={`${fontSize} font-bold mb-2`}>{time}</div>
      <div className="text-lg">{date}</div>
    </div>
  );
};

export default DateTimeDisplay;