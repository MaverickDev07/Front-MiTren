import { useState, useEffect } from "react";

const OrdenarEstacionesModalEditar = ({ onClose, ruta }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [estado, setEstado] = useState(ruta?.name || ""); // Inicializar con el nombre de la ruta
  const [selectedStations, setSelectedStations] = useState([]);
  const [availableStations, setAvailableStations] = useState([
    "Estación antigua Cochabamba",
    "Estación central San Antonio",
    "Parada el arco",
    "Alejo Calatayud",
    "OTB Universitario",
    "Politécnico",
  ]);

    const openModal = () => {
      setModalOpen(true);
    };

    const closeModalEdit = () => {
        setModalOpen(false);
    };

  useEffect(() => {
    // Inicializar datos del modal según la ruta seleccionada
    if (ruta) {
      setEstado(ruta.name);
      setSelectedStations([ruta.station, ruta.station2]);
    }
  }, [ruta]);

  // Cerrar el modal
  const closeModal = () => {
    onClose();
  };

      // Agregar una estación seleccionada
      const addStation = (station: string) => {
        setSelectedStations([...selectedStations, station]);
        setAvailableStations(availableStations.filter((s) => s !== station));
        closeModalEdit();
    };

    // Eliminar una estación seleccionada
    const removeStation = (index: number) => {
        const station = selectedStations[index];
        setSelectedStations(selectedStations.filter((_, i) => i !== index));
        setAvailableStations([...availableStations, station]);
    };
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-center font-bold mb-4">Editar Ruta</h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 text-3xl"
          >
            ✕
          </button>
        </div>
        <div className="mb-4">
            <label
            htmlFor="estado"
            className="block text-xl font-medium text-gray-700 mb-2"
        >
            Linea
          </label>
          <select
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Seleccione una linea</option>
            <option value="Linea Roja">Linea roja</option>
            <option value="Linea verde">Linea verde</option>
            <option value="Linea amarilla">Linea amarilla</option>
            </select>
        </div>
        <p className="text-xl text-center mb-4">
          Estaciones ordenadas para esta ruta
        </p>
        <div className="grid grid-cols-2 gap-4">
            {selectedStations.map((station, index) => (
                <div
                key={index}
                className="flex items-center justify-between border rounded px-4 py-2 bg-blue-100"
                >
                <span className="font-medium">{`${index + 1}. ${station}`}</span>
                <button
                    onClick={() => removeStation(index)}
                    className="text-red-500 font-bold hover:text-red-700"
                >
                    ✕
                </button>
                </div>
            ))}
            </div>
            <div className="mt-4 flex justify-center">
                <button
                    onClick={openModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    +
                </button>
            </div>
        <div className="mt-6 text-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Guardar
          </button>
        </div>
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                    <h3 className="text-xl font-bold mb-4">Seleccionar estación</h3>
                    <ul className="space-y-2">
                    {availableStations.map((station) => (
                        <li
                        key={station}
                        className="flex justify-between items-center border rounded px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                        <span>{station}</span>
                        <button
                            onClick={() => addStation(station)}
                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                        >
                            Agregar
                        </button>
                        </li>
                    ))}
                    </ul>
                    <button
                    onClick={closeModalEdit}
                    className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                    Cerrar
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default OrdenarEstacionesModalEditar;
