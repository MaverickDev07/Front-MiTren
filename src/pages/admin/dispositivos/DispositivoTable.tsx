const DispositivoTable = ({ onEdit }) => {
  const dispositivos = [
    { id: 1, tipo: "Quiosco", codigo: "123" , ubicacion:"ubicacion1" },
    { id: 2, tipo: "Boleteria", codigo: "124",ubicacion:"ubicacion1" },
  ];

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">N°</th>
          <th className="border-b p-2 text-left">Tipo</th>
          <th className="border-b p-2 text-left">Codigo</th>
          <th className="border-b p-2 text-left">Ubicacion a la que pertenece</th>
          <th className="border-b p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {dispositivos.map((dispositivo, index) => (
          <tr key={dispositivo.id}>
            <td className="border-b p-2">{index + 1}</td>
            <td className="border-b p-2">{dispositivo.tipo}</td>
            <td className="border-b p-2">{dispositivo.codigo}</td>
            <td className="border-b p-2">{dispositivo.ubicacion}</td>
            
            <td className="border-b p-2 text-center">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                onClick={() => onEdit(dispositivo)}
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

export default DispositivoTable;
