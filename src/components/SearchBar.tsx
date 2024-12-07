import { FC, useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 mt-4">
      <Search className="text-gray-500 ml-2" />
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Buscar"
        className="w-full p-3 text-black px-4 py-2 border rounded text-sm outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
