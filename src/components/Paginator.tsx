import React from "react";

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = [];
    const maxVisiblePages = 5; // Máximo de páginas visibles a la vez
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Botón "Anterior" */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md border border-gray-300 
          ${currentPage === 1 ? "cursor-not-allowed text-gray-400" : "hover:bg-gray-200 text-gray-700"}
        `}
      >
        &lt;
      </button>

      {/* Números de página */}
      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md border border-gray-300 
            ${page === currentPage ? "bg-purple-500 text-white" : "hover:bg-gray-200 text-gray-700"}
          `}
        >
          {page}
        </button>
      ))}

      {/* Botón "Siguiente" */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md border border-gray-300 
          ${currentPage === totalPages ? "cursor-not-allowed text-gray-400" : "hover:bg-gray-200 text-gray-700"}
        `}
      >
        &gt;
      </button>
    </div>
  );
};

export default Paginator;
