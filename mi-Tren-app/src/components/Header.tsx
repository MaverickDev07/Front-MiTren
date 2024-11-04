import React from 'react';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="text-white text-center py-4">
      <h1 className="text-lg font-bold">{title}</h1>
    </header>
  );
};

export default Header;
