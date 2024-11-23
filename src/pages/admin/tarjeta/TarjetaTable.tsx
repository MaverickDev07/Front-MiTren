const TarjetaTable = ({ onEdit }) => {
  const usuarios = [
    { id: 1, nombre: "Luis Perez Pinto", documento: "1026531", celular: "7026531", saldo: 50 },
    { id: 2, nombre: "Gary Guzman", documento: "1026531", celular: "7026531", saldo: 50 },
    { id: 3, nombre: "Alvaro Perez", documento: "1026531", celular: "7026531", saldo: 50 },
  ];

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">N°</th>
          <th className="border-b p-2 text-left">Nombre completo</th>
          <th className="border-b p-2 text-left">Número de documento</th>
          <th className="border-b p-2 text-left">Celular</th>
          <th className="border-b p-2 text-left">Saldo Bs</th>
          <th className="border-b p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario, index) => (
          <tr key={usuario.id}>
            <td className="border-b p-2">{index + 1}</td>
            <td className="border-b p-2">{usuario.nombre}</td>
            <td className="border-b p-2">{usuario.documento}</td>
            <td className="border-b p-2">{usuario.celular}</td>
            <td className="border-b p-2">{usuario.saldo}</td>
            <td className="border-b p-2 text-center">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                onClick={() => onEdit(usuario)}
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

export default TarjetaTable;
