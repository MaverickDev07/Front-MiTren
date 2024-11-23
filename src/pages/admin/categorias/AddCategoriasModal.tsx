import { FC, useState, useEffect } from "react";

interface AddCategoriasModalProps {
  isOpen: boolean;
  onClose: () => void;
  categorias?: { id: number; name: string; descripcion: string } | null;
}

const AddCategoriasModal: FC<AddCategoriasModalProps> = ({ isOpen, onClose, categorias }) => {
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (categorias) {
      setName(categorias.name);
      setDescripcion(categorias.descripcion)
    } else {
      setName("");
      setDescripcion("")
    }
  }, [categorias]);

  const handleSave = () => {
    console.log({ name });
    onClose(); // Cierra el modal después de guardar
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">
            {categorias ? "Editar categorias" : "Nueva categorias"}
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
                Categorias
              </label>
              <input
                id="text"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="categorias"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="frase"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Descripcion
              </label>
              <input
                id="descripcion"
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Escribe una frase..."
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
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

export default AddCategoriasModal;
