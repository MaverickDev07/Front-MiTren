const LineasTable = ({ onEdit }) => {
  const lineas = [
    { id: 1, name: "Las flores son bonitas", color: 'rojo', estado: "activo" },
    { id: 2, name: "El cielo es azul",  color: 'rojo', estado: "inactivo" },
  ];

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">N°</th>
          <th className="border-b p-2 text-left">Nombre Linea</th>
          <th className="border-b p-2 text-left">Color HEX</th>
          <th className="border-b p-2 text-left">Estado</th>
          <th className="border-b p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {lineas.map((linea, index) => (
          <tr key={linea.id}>
            <td className="border-b p-2">{index + 1}</td>
            <td className="border-b p-2">{linea.name}</td>
            <td className="border-b p-2">{linea.color}</td>
            <td className="border-b p-2">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  linea.estado === "activo"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {linea.estado.charAt(0).toUpperCase() + linea.estado.slice(1)}
              </span>
            </td>
            <td className="border-b p-2 text-center">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                onClick={() => onEdit(linea)}
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

export default LineasTable;
