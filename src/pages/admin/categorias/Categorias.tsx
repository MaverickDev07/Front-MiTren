import { useState } from "react";
import Header from "../dashboard/Header.tsx";
import CategoriasTable from "./CategoriasTable.tsx";
import AddLineasModal from "./AddCategoriasModal.tsx";
import { Search } from "lucide-react";

const Categorias = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [categorias, setCategorias] = useState(null);

  const openModal = (categoria = null) => {
    setCategorias(categoria);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCategorias(null);
  };

  return (
    <div className="p-6 bg-gray-100 h-screen">
      <Header />
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Categorias</h2>
          <div className="flex items-center space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => openModal()}
            >
              Nueva Categorias
            </button>
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 mt-4">
              <Search className="text-gray-500 ml-2" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full p-3 text-black px-4 py-2 border rounded text-sm outline-none"
              />
            </div>
          </div>
        </div>
        <CategoriasTable onEdit={openModal} />
      </div>

      <AddLineasModal
        isOpen={isModalOpen}
        onClose={closeModal}
        categorias={categorias}
      />
    </div>
  );
};

export default Categorias;

