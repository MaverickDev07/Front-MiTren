const FrasesTable = () => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">N°</th>
          <th className="border-b p-2 text-left">Frase institucional</th>
          <th className="border-b p-2 text-left">Estado</th>
          <th className="border-b p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-b p-2">1</td>
          <td className="border-b p-2">Las flores son bonitas</td>
          <td className="border-b p-2">
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
              Activo
            </span>
          </td>
          <td className="border-b p-2 text-center">
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FrasesTable;
