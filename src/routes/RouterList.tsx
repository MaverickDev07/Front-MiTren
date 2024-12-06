import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DecorationLayout from "@/layouts/DecorationLayout";
import Login from "@/pages/Login";
import UnauthorizedPage from "@/components/UnauthorizedPage";
import { AuthProvider } from "@/context/AuthContext";


const KioskPage = lazy(() => import("@/pages/kiosk/KioskPage"));
const AdminDashboard = lazy(() => import("@/pages/admin/AdminPage"));
const BoleteriaDashboard = lazy(() => import("@/pages/boxoffice/boxoffice"));
const ProtectedRoute = lazy(() => import ("@/components/ProtectedRoute"));

const RouterList = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<DecorationLayout><Login /></DecorationLayout>} />
        <Route path="/kiosk/*" element={<KioskPage />} />
        {/* Rutas protegidas */}
        <Route
          path="/admin-dashboard/*"
          element={<ProtectedRoute role="ADMIN"><AdminDashboard /></ProtectedRoute>}
        />
        <Route
          path="/boleteria/*"
          element={<ProtectedRoute role="BOLETERIA"><BoleteriaDashboard /></ProtectedRoute>}
        />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
};

export default RouterList;