import { useParams } from 'react-router';
import { MenuIcon } from '@/assets/icons/menu-icon';
import ButtonLink from '@/components/ButtonLink';
// import ArrowIcon from '@/assets/icons/flecha-icon';
import useFetch from '@/hook/useFetch';
import MapStation from './Map';

const DestinationPage = () => {

  const { id } = useParams(); 
  
  const { data, loading, error } = useFetch("/v1/lines?sort_by=createdAt-asc&filter_by=line_name:/línea/i");
  if (loading) return <div className="text-white text-center">Cargando líneas...</div>;
  if (error) return <div className="text-red-500 ">{error}</div>;

  const lineData = data?.lines.find(line => line.id === id);

  if (!lineData) {
    return <div className="text-red-500 text-center">Línea no encontrada</div>;
  }
  
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center pt-10">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {/* Columna del botón "Menu" */}
            <div className="flex items-center justify-start p-8 rounded-lg col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
              <ButtonLink to="/kiosk" className="flex items-center">
                <MenuIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-base sm:text-lg ml-2">Menu</span>
              </ButtonLink>
            </div>

            {/* Columna centrada */}
            <div className="flex items-center justify-center p-6 text-white col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white text-center uppercase mb-24">SELECCIONE SU DESTINO</h2>
            </div>

            {/* Columna de la línea roja */}
            <div className="flex items-center justify-end p-6 rounded-lg col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
              <h2 className="text-base sm:text-lg text-white">{lineData.line_name}</h2>
              <div className="h-4 w-4 bg-red-500 rounded-full ml-2"></div> {/* Círculo rojo */}
            </div>
          </div>
        </div>
    
        {/* Solo un contenedor de cuadrícula para evitar confusión */}
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex items-center justify-start p-8 rounded-lg col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
              {data?.lines.map((line) => (
                <ButtonLink to={`/kiosk/linea/${line.id}/destination/`} className="flex items-center">
                  <div className={`h-4 w-4 rounded-full mr-2 ${line.line_name === "LÍNEA ROJA" ? "bg-red-500" : line.line_name === "LÍNEA AMARILLA" ? "bg-yellow-500" : "bg-green-500"}`}></div>
                  <span className="text-base sm:text-lg ml-2">{line.line_name}</span>
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            Columna del Direccion
            <div className="flex items-center justify-start p-8 rounded-lg col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
              <span className="text-base sm:text-lg ml-2">Menu</span>
            </div>

            Columna Mapa
            <div className="flex items-center justify-center p-6 text-white col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1">
              
            </div>
          </div>
        </div> */}


        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Columna del Direccion */}
            <div className="p-6 bg-blue-500 text-white">
              <ButtonLink to="/kiosk" className="flex items-center">
                <MenuIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-base sm:text-lg ml-2">Direccion</span>
              </ButtonLink>
              <ButtonLink to="/kiosk" className="flex items-center">
                <MenuIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-base sm:text-lg ml-2">Direccion</span>
              </ButtonLink>
            </div>
              {/* Columna Mapa */}
            <div className="p-6 bg-green-500 text-white">
              <MapStation />
            </div>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default DestinationPage;