import { useAuth } from "@/context/AuthContext";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const {token: storetoken} = useAuth();
  const usuario = jwtDecode(storetoken);

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Bienvenido usuario admin  👋🏼 </h1>
      <div className="flex flex-col items-start space-y-2">
        <span>{usuario.fullname}</span>
        <div className="text-gray-700 px-3 py-1 text-sm">
          {usuario.role_name}
        </div>
      </div>
    </header>
  );
};

export default Header;

