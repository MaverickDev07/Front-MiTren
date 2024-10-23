import React from 'react';
interface MapStationProps {
  latitude: number;
  longitude: number;
}

const MapStation: React.FC<MapStationProps> = ({ latitude, longitude }) => {
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.4154731405797!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIzJzMwLjYiUyA2NsKwMTQnMDEuMiJX!5e0!3m2!1ses!2sbo!4v1729486637777!5m2!1ses!2sbo`;

  return (
    <div className="w-full h-48 sm:h-64 md:h-72 md:w-72 lg:h-96 lg:w-96">
      <iframe
        title="Google Maps"
        src={googleMapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapStation;


