const CategoriasTable = ({ onEdit }) => {
  const rutas = [
    { id: 1, name: "Las", station: 'rojo', station2: "verde" },
    { id: 2, name: "cielo es azul",  station: 'rojo', station2: "verde" },
  ];

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">N°</th>
          <th className="border-b p-2 text-left">Ruta</th>
          <th className="border-b p-2 text-left">Estacion inicial</th>
          <th className="border-b p-2 text-left">Estacion final</th>
          <th className="border-b p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {rutas.map((ruta, index) => (
          <tr key={ruta.id}>
            <td className="border-b p-2">{index + 1}</td>
            <td className="border-b p-2">{ruta.name}</td>
            <td className="border-b p-2">{ruta.station}</td>
            <td className="border-b p-2">{ruta.station2}</td>
            <td className="border-b p-2 text-center">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                onClick={() => onEdit(ruta)}
              >
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoriasTable;
