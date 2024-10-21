import LineItem from "@/components/LineItem";
import useFetch from "@/hook/useFetch";
//mandar a qui las estaciones que se recuperen en repose pagina nates de iniciar con el menu eso tendran las id de estacion 
//y segun el orden en que se prenda ir dando a cada kiosco un id para poder manejarlo y ya no mostrar esto a menos que se pierda
// el id de esatcion se guardara el ide de estacion en el navegador
const LinePage = () => {  

  const { data, loading, error } = useFetch("/v1/lines?sort_by=createdAt-asc&filter_by=line_name:/línea/i");

  if (loading) return <div className="text-white text-center">Cargando líneas...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center">
            <div className="text-white w-full max-w-2xl mx-auto">
              <div className="relative z-10 flex flex-col justify-center items-center text-center">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white uppercase mb-24">Selecciona una estación:</h2>
                <div className="flex flex-col items-center gap-12 w-full">
                  {data?.lines.map(line => (
                    <LineItem key={line.id} id={line.id} lineName={line.line_name} />
                  ))}
                </div>
              </div>          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinePage;