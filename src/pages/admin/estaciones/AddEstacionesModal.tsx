import { FC, useEffect, useState } from "react";

interface AddEstacionesModalProps {
  isOpen: boolean;
  onClose: () => void;
  estacion?: { name: string; coordenada: string; trasbordo: string; lines: string[] };
}

const AddEstacionesModal: FC<AddEstacionesModalProps> = ({ isOpen, onClose, estacion }) => {
  const [selectedLines, setSelectedLines] = useState<string[]>([]);
  const [promotionData, setPromotionData] = useState({
    name: "",
    coordenada: "",
    trasbordo: "",
  });

  // Efecto para cargar la estación seleccionada cuando se abra el modal
  useEffect(() => {
    if (estacion) {
      console.log("Trasbordo recibido:", estacion.trasbordo); // Depuración para verificar el valor
      setPromotionData({
        name: estacion.name,
        coordenada: estacion.coordenada,
        trasbordo: estacion.trasbordo?.toLowerCase() || "", // Normalizar el valor de trasbordo
      });
      setSelectedLines(estacion.lines || []);
    } else {
      // Resetear los campos si no hay estación seleccionada
      setPromotionData({ name: "", trasbordo: "", coordenada: "" });
      setSelectedLines([]);
    }
  }, [estacion]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPromotionData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLineSelection = (line: string) => {
    setSelectedLines((prev) =>
      prev.includes(line) ? prev.filter((l) => l !== line) : [...prev, line]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...promotionData, selectedLines });
    onClose();
  };

  const availableLines = ["Línea roja", "Línea amarilla", "Línea verde"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {estacion ? "Editar estación" : "Nueva estación"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre estación */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nombre estación
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={promotionData.name}
              onChange={handleInputChange}
              placeholder="Escribe el nombre de la estación"
              className="w-full border border-gray-400 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Coordenada */}
          <div>
            <label htmlFor="coordenada" className="block text-sm font-medium mb-1">
              Coordenada
            </label>
            <input
              id="coordenada"
              name="coordenada"
              type="text"
              value={promotionData.coordenada}
              onChange={handleInputChange}
              placeholder="Escribe la coordenada"
              className="w-full border border-gray-400 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Trasbordo */}
          <div>
            <label htmlFor="trasbordo" className="block text-sm font-medium mb-1">
              Trasbordo
            </label>
            <select
              id="trasbordo"
              name="trasbordo"
              value={promotionData.trasbordo}
              onChange={(e) => setPromotionData({ ...promotionData, trasbordo: e.target.value })}
              className="w-full border border-gray-400 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione una opción</option>
              <option value="sí">Sí</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Líneas participantes */}
          <div>
            <label htmlFor="lines" className="block text-sm font-medium mb-1">
              Líneas participantes
            </label>
            <div className="border border-gray-400 rounded px-4 py-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedLines.map((line) => (
                  <span
                    key={line}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs flex items-center"
                  >
                    {line}
                    <button
                      type="button"
                      onClick={() => handleLineSelection(line)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
              <select
                id="lines"
                className="w-full border border-gray-400 rounded px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleLineSelection(e.target.value)}
                value=""
              >
                <option value="" disabled>
                  Selecciona una línea
                </option>
                {availableLines.map((line) => (
                  <option key={line} value={line}>
                    {line}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón guardar */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEstacionesModal;
