import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

interface DecodedToken {
  role_name: "ADMIN" | "BOLETERIA";
  exp: number;
}

const ProtectedRoute = ({
  role,
  children,
}: {
  role: "ADMIN" | "BOLETERIA";
  children: JSX.Element;
}) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken: DecodedToken = jwtDecode(token);

    if (Date.now() >= decodedToken.exp * 1000) {
      sessionStorage.clear();
      return <Navigate to="/login" />;
    }

    if (decodedToken.role_name !== role) {
      sessionStorage.clear();
      return <Navigate to="/unauthorized" />;
    }

    return children;
  } catch (error) {
    sessionStorage.clear();
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
