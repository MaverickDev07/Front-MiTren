import React from 'react';

type Base64ImageProps = {
  base64: string;
  alt?: string;
  className?: string;
};

const Base64Image: React.FC<Base64ImageProps> = ({ base64, alt = 'Imagen', className }) => {
  return (
    <img
      src={base64}
      alt={alt}
      className={className}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default Base64Image;