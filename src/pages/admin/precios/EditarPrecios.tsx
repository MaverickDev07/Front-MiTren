import { useParams } from "react-router-dom";
import Header from "../dashboard/Header";
import { Search } from "lucide-react";

interface Destino {
  destino: string;
  general: number | string;
  preferencial: number | string;
  escolar: number | string;
}

interface RutaSeleccionada {
  id: number;
  origen: string;
  destinos: Destino[];
}

const EditarPrecios: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Capturar parámetro ID desde la URL

  // Simular datos de la ruta seleccionada
  const rutaSeleccionada: RutaSeleccionada = {
    id: parseInt(id || "0"),
    origen: "Estación antigua Cochabamba",
    destinos: [
      { destino: "Estación central San Antonio", general: 1, preferencial: 1, escolar: 1 },
      { destino: "Parada el arco", general: 2.5, preferencial: 2, escolar: 1 },
      { destino: "Av. Santa Bárbara", general: 2.5, preferencial: 2, escolar: 1 },
    ],
  };

  return (
    <div className="p-6">
      <Header />
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Precios</h2>
          <div className="flex items-center space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Guardar
            </button>
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 mt-4">
              <Search className="text-gray-500 ml-2" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full p-3 text-black px-4 py-2 border rounded text-sm outline-none"
              />
            </div>
          </div>
        </div>
        <table className="w-full border-collapse">
            <thead>
            <tr>
                <th className="border-b p-2 text-left">N°</th>
                <th className="border-b p-2 text-left">Origen</th>
                <th className="border-b p-2 text-left">Destino</th>
                <th className="border-b p-2 text-center">General</th>
                <th className="border-b p-2 text-center">Preferencial</th>
                <th className="border-b p-2 text-center">Escolar</th>
            </tr>
            </thead>
            <tbody>
            {rutaSeleccionada.destinos.map((destino, index) => (
                <tr key={index}>
                <td className="border-b p-2">{index + 1}</td>
                <td className="border-b p-2">{rutaSeleccionada.origen}</td>
                <td className="border-b p-2">{destino.destino}</td>
                <td className="border-b p-2 text-center">
                    <input
                    type="text"
                    defaultValue={destino.general}
                    className="w-full border rounded px-2 py-1 text-center"
                    />
                </td>
                <td className="border-b p-2 text-center">
                    <input
                    type="text"
                    defaultValue={destino.preferencial}
                    className="w-full border rounded px-2 py-1 text-center"
                    />
                </td>
                <td className="border-b p-2 text-center">
                    <input
                    type="text"
                    defaultValue={destino.escolar}
                    className="w-full border rounded px-2 py-1 text-center"
                    />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditarPrecios;
