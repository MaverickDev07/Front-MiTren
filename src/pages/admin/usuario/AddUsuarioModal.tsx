import { Eye, EyeOff } from "lucide-react";
import { FC, useState, useEffect } from "react";

interface AddFraseModalProps {
  isOpen: boolean;
  onClose: () => void;
  usuario?: {
    id: number;
    nombre: string;
    documento: string;
    password: string;
    passwordConfirm: string;
    rol: string;
  } | null;
}

const AddUsuarioModal: FC<AddFraseModalProps> = ({
  isOpen,
  onClose,
  usuario,
}) => {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [rol, setRol] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (usuario) {
      setNombre(usuario.nombre);
      setDocumento(usuario.documento);
      setPassword(usuario.password);
      setPasswordConfirm(usuario.passwordConfirm);
      setRol(usuario.rol);
    } else {
      setNombre("");
      setDocumento("");
      setPassword("");
      setPasswordConfirm("");
      setRol("");
    }
  }, [usuario]);

  const handleSave = () => {
    console.log({ nombre, documento, rol });
    onClose(); // Cierra el modal después de guardar
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">
            {usuario ? "Editar usuario" : "Nuevo usuario"}
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
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe el nombre..."
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="documento"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Documento
              </label>
              <input
                id="documento"
                type="text"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
                placeholder="Escribe el documento..."
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="rol"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Rol
              </label>
              <select
                id="rol"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="Boleteria">Boleteria</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contraseña
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Escribe la contraseña..."
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>

            <div className="mb-4">
              <label
                htmlFor="passwordConfirm"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirmar Contraseña
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="Escribe la contraseña..."
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                required
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

export default AddUsuarioModal;