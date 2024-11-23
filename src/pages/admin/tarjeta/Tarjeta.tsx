import { useState } from "react";
import Header from "../dashboard/Header.tsx";
import TarjetaTable from "./TarjetaTable.tsx";
import EditTarjetaModal from "./EditTarjetaModal.tsx";
import { Search } from "lucide-react";

const Tarjeta = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [precio, setPrecio] = useState("5")

  const openModal = (usuario = null) => {
    setUsuario(usuario);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setUsuario(null);
  };

  return (
    <div className="p-6 bg-gray-100 h-screen">
      <Header />
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Tarjetas NFC</h2>
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
              <Search className="text-gray-500 ml-2" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full p-3 text-black px-4 py-2 border rounded text-sm outline-none"
              />
            </div>
        </div>
          <div className="flex items-center">
            <h2 className="text-lg font-bold">Precio tarjeta NFC (Bs)</h2>
            <input
              type="text"
              placeholder="Precio"
              className="p-3 text-black text-center border rounded text-sm ml-2 w-[60px]"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              // onClick={onSubmit}
            />
            <button className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 text-sm ml-2">
              Guardar precio
            </button>
          </div>
        <div>
          
        </div>
        <TarjetaTable onEdit={openModal} />
      </div>

      <EditTarjetaModal
        isOpen={isModalOpen}
        onClose={closeModal}
        usuario={usuario}
      />
    </div>
  );
};

export default Tarjeta;

