import { MenuIcon, ArrowIcon, ArrowIcon1, ArrowIcon2 } from '@/assets/icons';
import ButtonLink from '@/components/ButtonLink';
import useFetch from '@/hook/useFetch';
import MultiColumnLayout from '@/components/MultiColumnLayout';
import { useState } from 'react';
import MapStation from './Map';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@/components/ButtonBase';

// Definición de la interfaz Line y Destination
interface Line {
  id: string;
  line_name: string;
  color: string;
}

interface Destination {
  station_id_start: string;
  station_id_end: string;
  station_name: string;
}

const DestinationPage = () => {
  const navigate = useNavigate();
  const [selectedLine, setSelectedLine] = useState<Line | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itinerary, setItinerary] = useState<Destination[]>([]); // Historial de destinos
  const limit = 5;
  
  const { data: linesData, loading: linesLoading, error: linesError } = useFetch("/v1/ticket_flow/step-1/lines");
  const { data: kiosksData, loading: kiosksLoading, error: kiosksError } = useFetch("/v1/ticket_flow/step-2/env-id/station");
  const { data: routesData, loading: routesLoading } = useFetch(selectedLine?.id ? `/v1/ticket_flow/step-2/line/${selectedLine.id}?limit=${limit}&page=${currentPage}` : null);
  const kiosksDat = kiosksData?.kiosk?.station;

  console.log(linesData)

  if (linesLoading || kiosksLoading || (selectedLine && routesLoading)) return <div className="text-white text-center">Cargando líneas...</div>;
  if (linesError) return <div className="text-red-500">{linesError}</div>;
  if (kiosksError) return <div className="text-red-500">{kiosksError}</div>;
  if (routesLoading) return <div className="text-white text-center">Cargando rutas...</div>;
  
  // Función para agregar un destino y permitir el cambio de línea
  const addDestinationToItinerary = (station: any) => {
    const newDestination = {
      station_id_start: kiosksDat.id,
      station_id_end: station.id,
      station_name: station.station_name,
    };
    const updatedItinerary = [...itinerary, newDestination];
    setItinerary(updatedItinerary);
  
    navigate(`/kiosk/destination/tickets/${station.id}`, {
      state: {
        itinerary: updatedItinerary,
      },
    });
  };
  // Función para cambiar a otra línea
  const handleNextLine = () => {
    const nextLine = linesData?.lines.find((line: Line) => line.id !== selectedLine?.id);
    if (nextLine) {
      setSelectedLine(nextLine);
      setCurrentPage(1);
    }
  };

  // Columnas para las líneas
  const columnsline = [
    { id: 'col1',
      content:
      <div className="flex items-center justify-start p-4 rounded-lg col-span-1">
        {linesData?.lines.map((line: Line) => (
          <ButtonLink 
            to={`/kiosk/destination/${line.id}`} 
            key={line.id}
            onClick={() => {
              setSelectedLine(line);
              setCurrentPage(1);
            }}
            height="h-[60px] sm:h-[50px] md:h-[50px] lg:h-[60px] xl:h[60px] 4xl:h-[60px]"
          >
            <div className={`h-4 w-4 rounded-full mr-2`} style={{ backgroundColor: line.color }}></div>
            <span className="text-xs sm:text-xs md:text-xs lg:text-lg ml-2">{line.line_name}</span>
          </ButtonLink>
        ))}
      </div>
    },
  ];

  // Columnas para los destinos
  const columnsdestiny = [
    { id: 'col1',
      content: 
      <div className="p-6 text-white">
        {kiosksDat && routesData?.routePaged.docs.map((station: any) => (
          <div key={station.id} className="flex justify-between p-2">
            <ButtonBase 
              className='w-full inline-flex justify-between items-center gap-4 p-3 sm:p-4 md:p-4 lg:p-8'
              height="h-[60px] sm:h-[20px] md:h-[20px] lg:h-[70px] xl:h[80px] 4xl:h-[100px]"
              onClick={() => {
                addDestinationToItinerary(station);
              }}
            >
              <span className="text-xs sm:text-xs md:text-xs lg:text-2xl ml-2">{station.station_name}</span>
              <ArrowIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h4 lg:w-8 lg:h-8" />
            </ButtonBase>
          </div>
        ))}
        {/* Paginación */}
        {selectedLine && routesData && (
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-300 p-2 rounded disabled:opacity-50"
            >
              <ArrowIcon2 className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h4 lg:w-8 lg:h-8 text-gray-900"/>
            </button>
            <span>{`Página ${currentPage} de ${routesData.routePaged.totalPages}`}</span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, routesData.routePaged.totalPages))}
              disabled={currentPage === routesData.routePaged.totalPages}
              className="bg-gray-300 p-2 rounded disabled:opacity-50"
            >
              <ArrowIcon1 className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h-8 lg:w-8 lg:h-8 text-gray-900"/>
            </button>
          </div>
        )}
      </div>
    },
    { id: 'col2',
      content:
      <div className="w-full h-full flex items-center flex-col">
        {kiosksDat && <MapStation latitude={kiosksDat?.location.latitude} longitude={kiosksDat?.location.longitude} />} 
        {/* Botón "Más destinos" para cambiar de línea */}
        {linesData?.lines.length > 1 && (
          <button
            onClick={handleNextLine}
            className="bg-white font-black text-black w-8 h-8 sm:w-6 sm:h-6 md:w-[10rem] md:h-8 lg:w-[20rem] lg:h-[4rem] p-2 rounded mt-2"
          >
            Más destinos (Transbordo)
          </button>
        )}
      </div>
    },
  ];

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <div className="container mx-auto px-6" style={{height: "115px"}}>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="flex items-center justify-start rounded-lg col-span-1">
              <ButtonLink to="/kiosk/menu" height="h-[60px] sm:h-[40px] md:h-[40px] lg:h-[60px] xl:h[60px] 4xl:h-[60px]">
                <MenuIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h4 lg:w-8 lg:h-8" />
                <span className="text-base sm:text-xs md:text-xs lg:text-lg ml-2">Menu</span>
              </ButtonLink>
            </div>
            <div className="flex items-center justify-center text-white col-span-1">
              <span className="font-bold text-2xl sm:text-lg md:text-lg lg:text-3xl text-white text-center mb-24 py-2">SELECCIONE SU DESTINO</span>
            </div>
            <div className="flex items-center justify-end p-6 rounded-lg col-span-1 text-white">
              <h2 className="text-base sm:text-xs md:text-xs lg:text-lg text-white">{selectedLine?.line_name || "Ninguna línea seleccionada"}</h2>
              {selectedLine && <div className="h-4 w-4" style={{ backgroundColor: selectedLine.color, borderRadius: '50%' }}></div>}
            </div> 
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <MultiColumnLayout columns={columnsline} />
          </div>
        </div>
        {selectedLine && (
          <div className="container mx-auto p-4">
            <MultiColumnLayout columns={columnsdestiny} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationPage;
