import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Promociones from "./promociones/Promociones";
import Sidebar from "./dashboard/Sidebar";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Frases = lazy(() => import("@/pages/admin/frases/Frases"));
const Tarjeta = lazy(() => import("@/pages/admin/tarjeta/Tarjeta"));
const Usuario = lazy(() => import("@/pages/admin/usuario/Usuario"));
const Linea = lazy(() => import("@/pages/admin/lineas/Lineas"));
const Categoria = lazy(() => import("@/pages/admin/categorias/Categorias"));
const Estaciones = lazy(() => import("@/pages/admin/estaciones/Estaciones"));
const Dispositivos = lazy(() => import("@/pages/admin/dispositivos/Dispositivos"));

const AdminPage = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 lg:p-8 min-h-full">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-900" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/frases" element={<Frases />} />
              <Route path="/tarjetas" element={<Tarjeta />} />
              <Route path="/promociones" element={<Promociones />} />
              <Route path="/usuarios" element={<Usuario />} />
              <Route path="/lineas" element={<Linea />} />
              <Route path="/categorias" element={<Categoria />} />
              <Route path="/estaciones" element={<Estaciones />} />
              <Route path="/dispositivos" element={<Dispositivos />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;