import { fetchData } from "@/services/apiService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Importamos los íconos

interface LoginResponse {
  token: string;
  user: {
    id: string;
    role: "admin" | "boleteria";
    name: string;
  };
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Nuevo estado
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data: LoginResponse = await fetchData("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("role", data.user.role);

      if (data.user.role === "admin") {
        navigate("/admin-dashboard");
      } else if (data.user.role === "boleteria") {
        navigate("/boleteria-dashboard");
      }
    } catch (error) {
      setError("Usuario o contraseña incorrectos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="absolute top-0 left-0 h-full w-full bg-pattern bg-cover"></div>

      <form onSubmit={handleLogin} className="relative z-10 p-8 rounded-lg shadow-lg text-center max-w-xs w-full">
        <h2 className="text-2xl font-bold text-white mb-6">Iniciar sesión</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="mb-4">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="USUARIO"
            className="w-full p-3 text-center rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        
        <div className="mb-6 relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="CONTRASEÑA"
            className="w-full p-3 text-center rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
        
        <button
          type="submit"
          className="w-full p-3 rounded-full bg-white text-black font-bold hover:bg-gray-800 transition disabled:bg-gray-600"
          disabled={loading}
        >
          {loading ? "Cargando..." : "INGRESAR"}
        </button>
      </form>
    </div>
  );
};

export default Login;
