import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }: { role: "admin" | "boleteria" }) => {
  const storedRole = sessionStorage.getItem("role");

  if (storedRole === role) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
