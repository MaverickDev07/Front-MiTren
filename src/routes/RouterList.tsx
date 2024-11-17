import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DecorationLayout from "@/layouts/DecorationLayout";
import Login from "@/pages/Login";


const KioskPage = lazy(() => import("@/pages/kiosk/KioskPage"));
const AdminDashboard = lazy(() => import("@/pages/admin/AdminPage"));

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<DecorationLayout><Login /></DecorationLayout>} />
      <Route path="/kiosk/*" element={<KioskPage />} />
      {/* <Route path="/admin-dashboard" element={<ProtectedRoute role="admin" />}>
        <Route index element={<AdminDashboard />} />
      </Route>
      <Route path="/boleteria-dashboard" element={<ProtectedRoute role="boleteria" />}>
        <Route index element={<BoleteriaDashboard />} />
      </Route> */}
      <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RouterList