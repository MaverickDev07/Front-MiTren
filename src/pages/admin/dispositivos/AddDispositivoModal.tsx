import { FC, useState, useEffect } from "react";

interface AddDispositivoModalProps {
  isOpen: boolean;
  onClose: () => void;
  dispositivo?: { id: number; tipo: string; codigo: string ,ubicacion:string } | null;
}

const AddDispositivoModal: FC<AddDispositivoModalProps> = ({ isOpen, onClose, dispositivo }) => {
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [codigo, setCodigo] = useState("");

  useEffect(() => {
    if (dispositivo) {
      setTipo(dispositivo.tipo);
      setUbicacion(dispositivo.ubicacion);
      setCodigo(dispositivo.codigo)
    } else {
      setTipo("");
      setUbicacion("");
      setCodigo("")
    }
  }, [dispositivo]);

  const handleSave = () => {
    console.log({ tipo, ubicacion });
    onClose(); // Cierra el modal después de guardar
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">
            {dispositivo ? "Editar dispositivo" : "Nuevo dispositivo"}
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
                htmlFor="tipo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tipo
              </label>
              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setUbicacion(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="tipo1">tipo1</option>
                <option value="tipo2">tipo2</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="codigo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Codigo
              </label>
              <input
                id="codigo"
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Escribe una frase..."
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="ubicacion"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ubicacion
              </label>
              <select
                id="ubicacion"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="cordenada1">cordenada1</option>
                <option value="cordenada12">cordenada12</option>
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

export default AddDispositivoModal;
