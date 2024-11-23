const FrasesTable = ({ onEdit }) => {
  const frases = [
    { id: 1, texto: "Las flores son bonitas", estado: "activo" },
    { id: 2, texto: "El cielo es azul", estado: "inactivo" },
  ];

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
        {frases.map((frase, index) => (
          <tr key={frase.id}>
            <td className="border-b p-2">{index + 1}</td>
            <td className="border-b p-2">{frase.texto}</td>
            <td className="border-b p-2">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  frase.estado === "activo"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {frase.estado.charAt(0).toUpperCase() + frase.estado.slice(1)}
              </span>
            </td>
            <td className="border-b p-2 text-center">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                onClick={() => onEdit(frase)}
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

export default FrasesTable;
