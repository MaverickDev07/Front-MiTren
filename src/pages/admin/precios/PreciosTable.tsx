import { useNavigate } from "react-router-dom";

interface Precio {
  id: number;
  name: string;
  station: string;
  station2: string;
}

const PreciosTable: React.FC = () => {
  const precios: Precio[] = [
    { id: 1, name: "Línea Roja", station: "Estación antigua Cochabamba", station2: "Estación central San Antonio" },
    { id: 2, name: "Línea Verde", station: "Estación central San Antonio", station2: "Estación antigua Cochabamba" },
  ];

  const navigate = useNavigate();

  const handlePreciosClick = (id: number) => {
    navigate(`/admin-dashboard/precios/editar-precios/${id}`);
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">N°</th>
          <th className="border-b p-2 text-left">Ruta</th>
          <th className="border-b p-2 text-left">Estación inicial</th>
          <th className="border-b p-2 text-left">Estación final</th>
          <th className="border-b p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {precios.map((precio, index) => (
          <tr key={precio.id}>
            <td className="border-b p-2">{index + 1}</td>
            <td className="border-b p-2">{precio.name}</td>
            <td className="border-b p-2">{precio.station}</td>
            <td className="border-b p-2">{precio.station2}</td>
            <td className="border-b p-2 text-center">
              <button
                onClick={() => handlePreciosClick(precio.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
              >
                Precios
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PreciosTable;

