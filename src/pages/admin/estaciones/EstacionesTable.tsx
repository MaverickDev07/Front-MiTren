const EstacionesTable = ({ onEdit }) => {
  const estaciones = [
    { id: 1, name: "estacion", coordenada: "12", linea: ["linea roja", "linea verde", "linea amarilla"], trasbordo: "si" },
    { id: 2, name: "estacion2", coordenada: "345", linea: ["linea roja", "linea verde", "linea amarilla"], trasbordo: "no" },
    { id: 3, name: "estacion#", coordenada: "456", linea: ["linea roja", "linea verde", "linea amarilla"], trasbordo: "si" },
  ];
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">N°</th>
          <th className="border-b p-2 text-left">Estacion o parada</th>
          <th className="border-b p-2 text-left">Coordenada</th>
          <th className="border-b p-2 text-left">Líneas que pasan</th>
          <th className="border-b p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {estaciones.map((estacion, index) => (
          <tr key={estacion.id}>
            <td className="border-b p-2">{index + 1}</td>
            <td className="border-b p-2">{estacion.name}</td>
            <td className="border-b p-2">{estacion.coordenada}</td>
            <td className="border-b p-2">{estacion.linea.join(", ")}</td>
            <td className="border-b p-2 text-center">
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 text-sm"
                onClick={() => onEdit(estacion)} // Pasar la estacionción seleccionada
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

export default EstacionesTable;
