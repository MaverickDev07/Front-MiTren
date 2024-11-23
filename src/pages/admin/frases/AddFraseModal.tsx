import { FC, useState, useEffect } from "react";

interface AddFraseModalProps {
  isOpen: boolean;
  onClose: () => void;
  frase?: { id: number; texto: string; estado: string } | null;
}

const AddFraseModal: FC<AddFraseModalProps> = ({ isOpen, onClose, frase }) => {
  const [texto, setTexto] = useState("");
  const [estado, setEstado] = useState("activo");

  useEffect(() => {
    if (frase) {
      setTexto(frase.texto);
      setEstado(frase.estado);
    } else {
      setTexto("");
      setEstado("activo");
    }
  }, [frase]);

  const handleSave = () => {
    console.log({ texto, estado });
    onClose(); // Cierra el modal después de guardar
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">
            {frase ? "Editar Frase Institucional" : "Nueva Frase Institucional"}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <form>
            <div className="mb-4">
              <label
                htmlFor="frase"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Frase
              </label>
              <input
                id="frase"
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Escribe una frase..."
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="estado"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Estado
              </label>
              <select
                id="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFraseModal;
