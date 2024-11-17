
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-grow flex flex-col">
        {/* Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold">Bienvenido al Dashboard</h2>
            <p className="mt-2 text-sm text-gray-600">
              Selecciona una opción del menú lateral para comenzar.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
