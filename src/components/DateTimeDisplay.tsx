import React, { useEffect, useState } from 'react';

const DateTimeDisplay: React.FC = () => {
  const [dateTime, setDateTime] = useState<string>('');

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
    setDateTime(`${formattedTime} ${formattedDate}`);
  };

  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>{dateTime}</div>
};

export default DateTimeDisplay