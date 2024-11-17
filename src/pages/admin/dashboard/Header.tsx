
const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Bienvenido usuario admin  👋🏼 </h1>
      <div className="flex flex-col items-start space-y-2">
        <span>Usuario</span>
        <div className="text-gray-700 px-3 py-1 text-sm">
          Admin
        </div>
      </div>
    </header>
  );
};

export default Header;

