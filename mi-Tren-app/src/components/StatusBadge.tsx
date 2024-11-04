import React from 'react';

type StatusBadgeProps = {
  status: 'valid' | 'expired' | 'invalid';
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusText = {
    valid: 'Ticket Válido',
    expired: 'Ticket Caducado',
    invalid: 'Ticket Inválido',
  };

  const badgeColors = {
    valid: 'bg-green-500',
    expired: 'bg-yellow-500',
    invalid: 'bg-red-500',
  };

  return (
    <div className={`text-white font-bold py-2 px-4 rounded ${badgeColors[status]}`}>
      {statusText[status]}
    </div>
  );
};

export default StatusBadge;
