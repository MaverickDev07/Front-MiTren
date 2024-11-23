import ButtonBase from "@/components/ButtonBase";
import NavigatorTop from "@/components/NavigatorTop";
import { Search } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const RecoverCardNFC: React.FC = () => {
  const navigate = useNavigate();

  // JSON de datos simulados
  const usuarios = [
    { id: "1", Nombre: "Luis Perez Pinto", Documento: "1026531", Celular: "7026531", Costo: "12" },
    { id: "2", Nombre: "Gary Guzmán", Documento: "1026532", Celular: "7026532", Costo: "15" },
    { id: "3", Nombre: "Alvaro Perez", Documento: "1026533", Celular: "7026533", Costo: "10" },
    { id: "4", Nombre: "Manuel Medrano", Documento: "1026534", Celular: "7026534", Costo: "20" },
  ];

  const handleRegistrar = (usuario: any) => {
    navigate("/boleteria/RecoverCardNFC/RecoverPage/RecoverPay", { state: usuario });
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center py-8 px-4 md:px-10">
      {/* Barra de navegación */}
      <div className="w-full lg:px-20 xl:px-[101px]">
        <NavigatorTop title="RECUPERAR TARJETA NFC" LinkTo="/boleteria" />
      </div>

      {/* Barra de búsqueda */}
      <div className="w-full max-w-4xl flex items-center space-x-2 bg-white rounded-lg px-4 py-2 mt-4">
        <Search className="text-gray-500 ml-2" />
        <input
          type="text"
          placeholder="Buscar"
          className="w-full p-3 text-black outline-none"
        />
      </div>

      {/* Tabla responsiva */}
      <div className="w-full max-w-[100rem] mt-8">
        {/* Encabezados */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-16 mt-6 text-lg md:text-2xl">
          <div className="text-center bg-white text-black p-3 font-bold rounded-3xl border-black border-[4px]">
            Nombres
          </div>
          <div className="text-center bg-white text-black p-3 font-bold rounded-3xl border-black border-[4px]">
            Documento
          </div>
          <div className="text-center bg-white text-black p-3 font-bold rounded-3xl border-black border-[4px]">
            Celular
          </div>
          <div className="text-center bg-white text-black p-3 font-bold rounded-3xl border-black border-[4px]">
            Nueva NFC
          </div>
        </div>

        {/* Filas de la tabla */}
        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-4 items-center text-lg md:text-2xl"
          >
            <div className="bg-white text-black text-center p-3 rounded-3xl border-black border-[4px]">
              {usuario.Nombre}
            </div>
            <div className="bg-white text-black text-center p-3 rounded-3xl border-black border-[4px]">
              {usuario.Documento}
            </div>
            <div className="bg-white text-black text-center p-3 rounded-3xl border-black border-[4px]">
              {usuario.Celular}
            </div>
            <div className="text-center">
              <ButtonBase
                onClick={() => handleRegistrar(usuario)}
                className="hover:bg-green-700 text-black font-bold py-2 px-4 rounded-full shadow-lg"
                backgroundColor="bg-green-500"
                height="h-[50px] w-full sm:h-[60px] md:h-[70px]"
                borderColor="border-black border-[4px]"
                rounded="rounded-3xl"
              >
                Registrar
              </ButtonBase>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecoverCardNFC;
