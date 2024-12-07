import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { fetchData, deleteData } from "@/services/apiService";
import Paginator from "@/components/Paginator";

const UsuarioTable = ({
  onEdit,
  reloadTable,
  searchQuery,
}:{
  onEdit: (usuario:any) => void;
  reloadTable: boolean;
  searchQuery: string;
}) => {
  const { token } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const endpoint = `/v1/users?sort_by=createdAt-asc&limit=${limit}&page=${currentPage}${
    searchQuery ? `&filter_by=content:"${searchQuery}"` : ""
  }`;

  const usuarios = data?.userPaged.docs || [];
  const totalPages = data?.userPaged.totalPages || 1;
  const fetchPhrases = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchData(endpoint, token);
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhrases();
  }, [currentPage, reloadTable, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario?")) return;

    const deleteEndpoint = `/v1/users/${id}`;
    try {
      await deleteData(deleteEndpoint, token);
      fetchPhrases();
    } catch (err) {
      console.error("Error al eliminar el usuario:", err);
    }
  };

  if (loading) return <p className="text-center">Cargando usuario...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
          <th className="border-b p-2 text-left">N°</th>
            <th className="border-b p-2 text-left">Nombre completo</th>
            <th className="border-b p-2 text-left">Número de documento</th>
            <th className="border-b p-2 text-left">Rol</th>
            <th className="border-b p-2 text-left">Estado</th>
            <th className="border-b p-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario: any, index: number) => (
            <tr key={usuario.id}>
              <td className="border-b p-2">{index + 1 + (currentPage - 1) * limit}</td>
              <td className="border-b p-2">{usuario.fullname}</td>
              <td className="border-b p-2">{usuario.doc_number}</td>
              <td className="border-b p-2">{usuario.role_name}</td>
              <td className="border-b p-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    usuario.status === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {usuario.status === "ACTIVE" ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="border-b p-2 text-center">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                  onClick={() => onEdit(usuario)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  onClick={() => handleDelete(usuario.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </footer>
    </div>
  );
};

export default UsuarioTable;
