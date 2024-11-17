import { useState } from "react";
import Header from "../dashboard/Header.tsx";
import FrasesTable from "./FrasesTable.tsx";
import AddFraseModal from "./AddFraseModal.tsx";

const Frases = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="p-6 bg-gray-100 h-screen">
      <Header />
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Frases institucionales</h2>
          <div className="flex items-center space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={openModal}
            >
              Nueva frase
            </button>
            <input
              type="text"
              placeholder="Buscar"
              className="px-4 py-2 border rounded text-sm"
            />
          </div>
        </div>
        <FrasesTable />
      </div>

      {/* Modal */}
      <AddFraseModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Frases;
