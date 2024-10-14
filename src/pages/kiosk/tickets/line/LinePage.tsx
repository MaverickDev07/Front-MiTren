import { MenuIcon } from "@/assets/icons/menu-icon";
import ButtonLink from "@/components/ButtonLink";
import LineItem from "@/components/LineItem";
import useFetch from "@/hook/useFetch";

const LinePage = () => {  

  const { data, loading, error } = useFetch("/v1/lines?sort_by=createdAt-asc&filter_by=line_name:/línea/i");

  if (loading) return <div className="text-white text-center">Cargando líneas...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 p-6 rounded-lg">
              <ButtonLink to="/kiosk" className="flex items-center justify-center">
                <MenuIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-base sm:text-lg ml-2">Menu</span>
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center">
            <div className="text-white w-full max-w-2xl mx-auto">
              <div className="relative z-10 flex flex-col justify-center items-center text-center">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white uppercase mb-24">Líneas que pasan por esta estación, selecciona una:</h2>
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