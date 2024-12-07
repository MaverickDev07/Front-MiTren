import { useState } from "react";
import Header from "../dashboard/Header.tsx";
import FrasesTable from "./FrasesTable.tsx";
import AddFraseModal from "./AddFraseModal.tsx";
import SearchBar from "@/components/SearchBar";

const Frases = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFrase, setSelectedFrase] = useState(null);
  const [reloadTable, setReloadTable] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = (frase = null) => {
    setSelectedFrase(frase);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFrase(null);
  };

  const handleSuccess = () => {
    setReloadTable(!reloadTable);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="p-6 bg-gray-100 h-screen">
      <Header />
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Frases institucionales</h2>
          <div className="flex items-center space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => openModal()}
            >
              Nueva frase
            </button>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <FrasesTable
          onEdit={openModal}
          reloadTable={reloadTable}
          searchQuery={searchQuery} 
        />
      </div>

      <AddFraseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSuccess={handleSuccess}
        frase={selectedFrase}
      />
    </div>
  );
};

export default Frases;
