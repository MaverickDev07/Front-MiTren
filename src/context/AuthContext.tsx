import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  role: "ADMIN" | "BOLETERIA" | null;
  setAuth: (token: string, role: string) => void;
  clearAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(sessionStorage.getItem("token"));
  const [role, setRole] = useState<"ADMIN" | "BOLETERIA" | null>(sessionStorage.getItem("role") as "ADMIN" | "BOLETERIA" | null);

  const setAuth = (token: string, role: string) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("role", role);
    setToken(token);
    setRole(role);
  };

  const clearAuth = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, setAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};