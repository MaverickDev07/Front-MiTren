// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "@/services/authService"; // Servicio de autenticación

interface AuthContextProps {
  user: { role: string; token: string } | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ role: string; token: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const { token, role } = await loginService(username, password);
      const user = { role, token };
      setUser(user);
      sessionStorage.setItem("user", JSON.stringify(user));
      navigate(role === "admin" ? "/admin/dashboard" : "/ticketing/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
