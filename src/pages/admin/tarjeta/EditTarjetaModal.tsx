import { FC, useState, useEffect } from "react";

interface EditTarjetaModalProps {
  isOpen: boolean;
  onClose: () => void;
  usuario?: { id: number;
    nombre: string;
    documento: string;
    celular: string;
    saldo:string
  } | null;
}

const EditTarjetaModal: FC<EditTarjetaModalProps> = ({ isOpen, onClose, usuario }) => {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [celular, setCelular] = useState("");
  const [saldo, setSaldo] = useState("");

  useEffect(() => {
    if (usuario) {
      setNombre(usuario.nombre);
      setDocumento(usuario.documento);
      setCelular(usuario.celular);
      setSaldo(usuario.saldo);
    } else {
      setNombre("");
      setDocumento("");
      setCelular("");
      setSaldo("");
    }
  }, [usuario]);

  const handleSave = () => {
    console.log({ nombre, documento, celular, saldo });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Editar Usuario</h2>
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
              <label className="block text-sm font-medium mb-2">Nombre completo</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Número de documento</label>
              <input
                type="text"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Celular</label>
              <input
                type="text"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Saldo Bs</label>
              <input
                type="number"
                value={saldo}
                onChange={(e) => setSaldo(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none"
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

export default EditTarjetaModal;
