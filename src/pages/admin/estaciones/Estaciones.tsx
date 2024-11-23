import { useState } from "react";
import AddPromocionModal from "./AddEstacionesModal";
import EstacionesTable from "./EstacionesTable";
import Header from "../dashboard/Header";

const Estaciones = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [estacion, setEstacion] = useState(null);

  console.log(estacion)
  const openModal = (estacion = null) => {
    setEstacion(estacion); // Guardar la promoción seleccionada
    setModalOpen(true);
  };

  const closeModal = () => {
    setEstacion(null); // Limpiar la promoción seleccionada
    setModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 h-screen">
      <Header />
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Estaciones y paradas</h2>
          <div className="flex items-center space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => openModal()} // Abrir modal vacío para nueva promoción
            >
              Nueva promoción
            </button>
            <input
              type="text"
              placeholder="Buscar"
              className="px-4 py-2 border rounded text-sm"
            />
          </div>
        </div>
        <EstacionesTable onEdit={openModal} />
      </div>

      {/* Modal */}
      <AddPromocionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        estacion={estacion}
      />
    </div>
  );
};

export default Estaciones;
