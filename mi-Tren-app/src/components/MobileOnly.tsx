import React, { useEffect } from 'react';
import MobileDetect from 'mobile-detect';
import { useNavigate } from 'react-router-dom';

const MobileOnly: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);
    if (!md.mobile()) {
      navigate('/mobile-only');
    }
  }, [navigate]);

  return <>{children}</>;
};

export default MobileOnly;
