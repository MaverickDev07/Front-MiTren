const PromocionesTable = ({ onEdit }) => {
  const promociones = [
    { id: 1, nombre: "promo", descripcion: "promo2", precio: "1", linea: ["linea roja", "linea verde", "linea amarilla"], estado: "activo" },
    { id: 2, nombre: "promo2", descripcion: "promo2", precio: "2", linea: ["linea roja", "linea verde", "linea amarilla"], estado: "activo" },
    { id: 3, nombre: "promo#", descripcion: "promo2", precio: "4", linea: ["linea roja", "linea verde", "linea amarilla"], estado: "activo" },
  ];
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2 text-left">N°</th>
          <th className="border-b p-2 text-left">Nombre promoción</th>
          <th className="border-b p-2 text-left">Descripción</th>
          <th className="border-b p-2 text-left">Precio Bs.</th>
          <th className="border-b p-2 text-left">Líneas aplicadas</th>
          <th className="border-b p-2 text-left">Estado</th>
          <th className="border-b p-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {promociones.map((promo, index) => (
          <tr key={promo.id}>
            <td className="border-b p-2">{index + 1}</td>
            <td className="border-b p-2">{promo.nombre}</td>
            <td className="border-b p-2">{promo.descripcion}</td>
            <td className="border-b p-2">{promo.precio}</td>
            <td className="border-b p-2">{promo.linea.join(", ")}</td>
            <td className="border-b p-2">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  promo.estado === "activo"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {promo.estado.charAt(0).toUpperCase() + promo.estado.slice(1)}
              </span>
            </td>
            <td className="border-b p-2 text-center">
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 text-sm"
                onClick={() => onEdit(promo)} // Pasar la promoción seleccionada
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

export default PromocionesTable;
