import { useState } from "react";
import Header from "../dashboard/Header.tsx";
import UsuarioTable from "./UsuarioTable.tsx";
import AddUsuarioModal from "./AddUsuarioModal.tsx";
import SearchBar from "@/components/SearchBar.tsx";

const Usuario = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [reloadTable, setReloadTable] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = (frase = null) => {
    setUsuario(frase);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setUsuario(null);
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
          <h2 className="text-lg font-bold">Usuarios</h2>
          <div className="flex items-center space-x-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => openModal()}
            >
              Nueva Usuario
            </button>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <UsuarioTable 
          onEdit={openModal}
          reloadTable={reloadTable}
          searchQuery={searchQuery}
        />
      </div>

      <AddUsuarioModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSuccess={handleSuccess}
        usuario={usuario}
      />
    </div>
  );
};

export default Usuario;

