import { useAuth } from "@/context/AuthContext";
import useCreate from "@/hook/useCreate";
import useUpdate from "@/hook/useUpdate";
import { Eye, EyeOff } from "lucide-react";
import { FC, useState, useEffect } from "react";

interface AddUsuarioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  usuario?: {
    id: number;
    fullname: string;
    doc_number: string;
    password: string;
    role_name: string;
    status: string;
  } | null;
}

const AddUsuarioModal: FC<AddUsuarioModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  usuario,
}) => {
  const { token } = useAuth();
  const [fullname, setFullname] = useState("");
  const [doc_number, setDoc_number] = useState("");
  const [password, setPassword] = useState("");
  const [role_name, setRole_name] = useState("");
  const [status, setStatus] = useState("ACTIVE");
  const [showPassword, setShowPassword] = useState(false);

  const { create, loading: creating } = useCreate("/v1/users", token);
  const { update: updateUserData, loading: updatingData } = useUpdate(`/v1/users/${usuario?.id || ""}`, token);
  const { update: updatePassword, loading: updatingPassword } = useUpdate(`/v1/users/${usuario?.id || ""}/password`, token);

  useEffect(() => {
    if (usuario) {
      setFullname(usuario.fullname);
      setDoc_number(usuario.doc_number);
      setPassword("");
      setRole_name(usuario.role_name);
      setStatus(usuario.status);
    } else {
      setFullname("");
      setDoc_number("");
      setPassword("");
      setRole_name("");
      setStatus("ACTIVE");
    }
  }, [usuario]);

  const handleSave = async () => {
    try {
      if (usuario) {
        const userData = { fullname, doc_number, role_name, status };
        await updateUserData(userData);
        if (password) {
          const passwordData = { password };
          await updatePassword(passwordData);
        }
      } else {
        const newUser = { fullname, doc_number, role_name, password, status };
        await create(newUser);
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
    }
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
        {/* Modal Body */}
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
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
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
                value={doc_number}
                onChange={(e) => setDoc_number(e.target.value)}
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
                value={role_name}
                onChange={(e) => setRole_name(e.target.value)}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Seleccione el rol</option>
                <option value="BOLETERIA">Boleteria</option>
                <option value="ADMIN">Admin</option>
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
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
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
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              disabled={creating || updatingData || updatingPassword}
            >
              {creating || updatingData || updatingPassword
                ? "Guardando..."
                : "Guardar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUsuarioModal;
