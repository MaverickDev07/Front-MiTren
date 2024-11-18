import { MenuIcon, ArrowIcon, ArrowIcon1, ArrowIcon2 } from '@/assets/icons';
import ButtonLink from '@/components/ButtonLink';
import useFetch from '@/hook/useFetch';
import MultiColumnLayout from '@/components/MultiColumnLayout';
import { useEffect, useState } from 'react';
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
  const [selectedLines, setSelectedLines] = useState<Line[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itinerary, setItinerary] = useState<Destination[]>([]);
  const limit = 5;

  const { data: linesData, loading: linesLoading, error: linesError } = useFetch("/v1/ticket_flow/step-1/lines");
  const { data: kiosksData, loading: kiosksLoading, error: kiosksError } = useFetch("/v1/ticket_flow/step-2/env-id/station");
  
  useEffect(() => {
    // Seleccionar automáticamente la primera línea y añadirla al array de líneas seleccionadas
    if (linesData?.lines && linesData.lines.length > 0) {
      setSelectedLines([linesData.lines[0]]);
    }
  }, [linesData]);
console.log(selectedLines)
  // Actualizar rutas cada vez que cambie la última línea seleccionada
  const { data: routesData, loading: routesLoading } = useFetch(
    selectedLines.length > 0 
      ? `/v1/ticket_flow/step-2/line/${selectedLines[selectedLines.length - 1].id}?limit=${limit}&page=${currentPage}`
      : null
  );
  
  const kiosksDat = kiosksData?.kiosk?.station;

  if (linesLoading || kiosksLoading || routesLoading) return <div className="text-white text-center">Cargando líneas...</div>;
  if (linesError) return <div className="text-red-500">{linesError}</div>;
  if (kiosksError) return <div className="text-red-500">{kiosksError}</div>;

  const addDestinationToItinerary = (station: any) => {
    const newDestination = {
      station_id_start: kiosksDat.id,
      station_id_end: station.id,
      station_name: station.station_name,
    };
    const updatedItinerary = [...itinerary, newDestination];
    setItinerary(updatedItinerary);

    navigate(`/boleteria/destination/tickets/${kiosksDat.id}`, {
      state: {
        itinerary: updatedItinerary,
      },
    });

    // Añadir siguiente línea automáticamente si está disponible
    const currentLineIndex = linesData.lines.findIndex(line => line.id === selectedLines[selectedLines.length - 1].id);
    if (currentLineIndex !== -1 && currentLineIndex < linesData.lines.length - 1) {
      const nextLine = linesData.lines[currentLineIndex + 1];
      setSelectedLines(prevLines => [...prevLines, nextLine]);
      setCurrentPage(1); // Reiniciar a la primera página para la nueva línea
    }
  };  

  // Columnas para las líneas
  const columnsline = [
    {
      id: 'col1',
      content: (
        <div className="flex items-center justify-start p-4 rounded-lg col-span-1">
          {linesData?.lines.map((line: Line) => (
            <ButtonLink
              to={`/boleteria/destination/${line.id}`}
              key={line.id}
              onClick={() => {
                setSelectedLines([line]); // Reemplazar con la línea seleccionada
                setCurrentPage(1);
              }}
              height="h-[60px] sm:h-[50px] md:h-[50px] lg:h-[60px] xl:h[60px] 4xl:h-[60px]"
            >
              <div className={`h-4 w-4 rounded-full mr-2`} style={{ backgroundColor: line.color }}></div>
              <span className="text-xs sm:text-xs md:text-xs lg:text-lg ml-2">{line.line_name}</span>
            </ButtonLink>
          ))}
        </div>
      ),
    },
  ];

  // Columnas para los destinos
  const columnsdestiny = [
    {
      id: 'col1',
      content: (
        <div className="p-6 text-white">
          {kiosksDat && routesData?.routePaged.docs.map((station: any) => (
            <div key={station.id} className="flex justify-between p-2">
              <ButtonBase
                className="w-full inline-flex justify-between items-center gap-4 p-3 sm:p-4 md:p-4 lg:p-8"
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
          {selectedLines.length > 0 && routesData && (
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="bg-gray-300 p-2 rounded disabled:opacity-50"
              >
                <ArrowIcon2 className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h4 lg:w-8 lg:h-8 text-gray-900" />
              </button>
              <span>{`Página ${currentPage} de ${routesData.routePaged.totalPages}`}</span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, routesData.routePaged.totalPages))}
                disabled={currentPage === routesData.routePaged.totalPages}
                className="bg-gray-300 p-2 rounded disabled:opacity-50"
              >
                <ArrowIcon1 className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h-8 lg:w-8 lg:h-8 text-gray-900" />
              </button>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'col2',
      content: (
        <div className="w-full h-full flex items-center flex-col">
          {kiosksDat && <MapStation latitude={kiosksDat?.location.latitude} longitude={kiosksDat?.location.longitude} />}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center">
      <div className="w-full lg:px-20 xl:px-[101px]">
        <div className="container mx-auto px-6" style={{height: "115px"}}>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="flex items-center justify-start rounded-lg col-span-1">
              <ButtonLink to="/boleteria/menu" height="h-[60px] sm:h-[40px] md:h-[40px] lg:h-[60px] xl:h[60px] 4xl:h-[60px]">
                <MenuIcon className="w-8 h-8 sm:w-6 sm:h-6 md:w-4 md:h4 lg:w-8 lg:h-8" />
                <span className="text-base sm:text-xs md:text-xs lg:text-lg ml-2">Menu</span>
              </ButtonLink>
            </div>
            <div className="flex items-center justify-center text-white col-span-1">
              <span className="font-bold text-2xl sm:text-lg md:text-lg lg:text-3xl text-white text-center mb-24 py-2">SELECCIONE SU DESTINO</span>
            </div>
            <div className="flex items-center justify-end p-6 rounded-lg col-span-1 text-white">
              <h2 className="text-base sm:text-xs md:text-xs lg:text-lg text-white">
                {selectedLines.length > 0 ? selectedLines[selectedLines.length - 1].line_name : "Ninguna línea seleccionada"}
              </h2>
              {selectedLines.length > 0 && (
                <div
                  className="h-4 w-4 ml-2"
                  style={{ backgroundColor: selectedLines[selectedLines.length - 1].color, borderRadius: '50%' }}
                ></div>
              )}
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <MultiColumnLayout columns={columnsline} />
          </div>
        </div>
        {selectedLines && (
          <div className="container mx-auto p-4">
            <MultiColumnLayout columns={columnsdestiny} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationPage;
