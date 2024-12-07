import { FC, useState, useEffect } from "react";
import useCreate from "@/hook/useCreate";
import useUpdate from "@/hook/useUpdate";
import { useAuth } from "@/context/AuthContext";

interface AddFraseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  frase?: { id: number; content: string; status: string } | null;
}

const AddFraseModal: FC<AddFraseModalProps> = ({ isOpen, onClose, onSuccess, frase }) => {
  const { token } = useAuth();
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("ACTIVE");
  const { create, loading: creating } = useCreate("/v1/phrases", token);
  const { update, loading: updating } = useUpdate(`/v1/phrases/${frase?.id || ""}`, token);

  useEffect(() => {
    if (frase) {
      setContent(frase.content);
      setStatus(frase.status);
    } else {
      setContent("");
      setStatus("ACTIVE");
    }
  }, [frase]);

  const handleSave = async () => {
    const body = { content, status };
    try {
      if (frase) {
        await update(body);
      } else {
        await create(body);
      }
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error al guardar la frase:", error);
    }
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
        {/* Modal Body */}
        <div className="p-4">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Frase</label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="ACTIVE">Activo</option>
                <option value="INACTIVE">Inactivo</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleSave}
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full ${creating || updating ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={creating || updating}
            >
              {creating || updating ? "Guardando..." : "Guardar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFraseModal;


