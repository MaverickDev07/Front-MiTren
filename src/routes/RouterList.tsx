import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";


const KioskPage = lazy(() => import("@/pages/kiosk/KioskPage"));

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/kiosk/*" element={<KioskPage />} />
      {/* <Route path="/admin-dashboard" element={<ProtectedRoute role="admin" />}>
        <Route index element={<AdminDashboard />} />
      </Route>
      <Route path="/boleteria-dashboard" element={<ProtectedRoute role="boleteria" />}>
        <Route index element={<BoleteriaDashboard />} />
      </Route> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RouterList