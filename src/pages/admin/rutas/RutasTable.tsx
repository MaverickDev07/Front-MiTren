import { useState } from "react";
import OrdenarEstacionesModalEditar from "./OrdenarEstacionesModalEditar";

const RutasTable = () => {
  const rutas = [
    { id: 1, name: "Linea Roja", station: "estacion uno", station2: "estacion destino" },
    { id: 2, name: "Linea Verde", station: "estacion dos", station2: "estacion destino" },
  ];

  const [isEditarModalOpen, setEditarModalOpen] = useState(false);
  const [rutaSeleccionada, setRutaSeleccionada] = useState(null); 

  const openEditarModal = (ruta) => {
    setRutaSeleccionada(ruta); // Guardar los datos de la ruta seleccionada
    setEditarModalOpen(true);
  };

  // Cerrar modal de "Editar"
  const closeEditarModal = () => {
    setEditarModalOpen(false);
    setRutaSeleccionada(null); // Limpiar la selección al cerrar
  };

  return (
    <div>
      {/* Tabla de rutas */}
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
          {rutas.map((ruta, index) => (
            <tr key={ruta.id}>
              <td className="border-b p-2">{index + 1}</td>
              <td className="border-b p-2">{ruta.name}</td>
              <td className="border-b p-2">{ruta.station}</td>
              <td className="border-b p-2">{ruta.station2}</td>
              <td className="border-b p-2 text-center">
                <button
                  onClick={() => openEditarModal(ruta)} // Pasar datos al modal de editar
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de "Editar" */}
      {isEditarModalOpen && (
        <OrdenarEstacionesModalEditar
          onClose={closeEditarModal}
          ruta={rutaSeleccionada} // Pasar la ruta seleccionada como prop
        />
      )}
    </div>
  );
};

export default RutasTable;
