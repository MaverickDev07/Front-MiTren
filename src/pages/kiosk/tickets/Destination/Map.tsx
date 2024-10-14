
const MapStation = () => {


  return (
    <>
      <div className="w-full h-full flex flex-col bg-white rounded-[44px] p-8">
        <div className='width 100%'>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.25731383118!2d-63.18445002526004!3d-17.779599974963283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e80b7203dcbd%3A0x7a20c9f2a3f17523!2s24%20de%20septiembre%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1sen!2sbo!4v1721269932929!5m2!1sen!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapStation;