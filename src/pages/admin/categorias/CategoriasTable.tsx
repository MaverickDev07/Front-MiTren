const CategoriasTable = ({ onEdit }) => {
  const categorias = [
    { id: 1, name: "Las flores son bonitas", descripcion: 'rojo', estado: "activo" },
    { id: 2, name: "El cielo es azul",  descripcion: 'rojo', estado: "inactivo" },
  ];

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">N°</th>
          <th className="border-b p-2 text-left">Nombre Categoria</th>
          <th className="border-b p-2 text-left">Descripcion</th>
          <th className="border-b p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria, index) => (
          <tr key={categoria.id}>
            <td className="border-b p-2">{index + 1}</td>
            <td className="border-b p-2">{categoria.name}</td>
            <td className="border-b p-2">{categoria.descripcion}</td>
            <td className="border-b p-2 text-center">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                onClick={() => onEdit(categoria)}
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
