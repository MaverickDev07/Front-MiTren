import { useState } from "react";
import AddPromocionModal from "./AddPromocionModal";
import PromocionesTable from "./PromocionesTable";
import Header from "../dashboard/Header";

const Promociones = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [promocion, setPromocion] = useState(null);

  console.log(promocion)
  const openModal = (promocion = null) => {
    setPromocion(promocion); // Guardar la promoción seleccionada
    setModalOpen(true);
  };

  const closeModal = () => {
    setPromocion(null); // Limpiar la promoción seleccionada
    setModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 h-screen">
      <Header />
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Promociones</h2>
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
        <PromocionesTable onEdit={openModal} />
      </div>

      {/* Modal */}
      <AddPromocionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        promocion={promocion}
      />
    </div>
  );
};

export default Promociones;
