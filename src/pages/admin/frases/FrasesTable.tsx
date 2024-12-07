import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { fetchData, deleteData } from "@/services/apiService";
import Paginator from "@/components/Paginator";

const FrasesTable = ({
  onEdit,
  reloadTable,
  searchQuery, // Nuevo prop para el término de búsqueda
}: {
  onEdit: (frase: any) => void;
  reloadTable: boolean;
  searchQuery: string;
}) => {
  const { token } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const endpoint = `/v1/phrases?sort_by=createdAt-asc&limit=${limit}&page=${currentPage}${
    searchQuery ? `&filter_by=content:"${searchQuery}"` : ""
  }`;
  const frases = data?.phrasePaged.docs || [];
  const totalPages = data?.phrasePaged.totalPages || 1;

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
    if (!confirm("¿Estás seguro de que quieres eliminar esta frase?")) return;

    const deleteEndpoint = `/v1/phrases/${id}`;
    try {
      await deleteData(deleteEndpoint, token);
      fetchPhrases();
    } catch (err) {
      console.error("Error al eliminar la frase:", err);
    }
  };

  if (loading) return <p className="text-center">Cargando frases...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2 text-left">N°</th>
            <th className="border-b p-2 text-left">Frase institucional</th>
            <th className="border-b p-2 text-left">Estado</th>
            <th className="border-b p-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {frases.map((frase: any, index: number) => (
            <tr key={frase.id}>
              <td className="border-b p-2">{index + 1 + (currentPage - 1) * limit}</td>
              <td className="border-b p-2">{frase.content}</td>
              <td className="border-b p-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    frase.status === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {frase.status === "ACTIVE" ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="border-b p-2 text-center space-x-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                  onClick={() => onEdit(frase)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  onClick={() => handleDelete(frase.id)}
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

export default FrasesTable;

