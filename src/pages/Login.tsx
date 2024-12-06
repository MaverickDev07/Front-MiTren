import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string;
  fullname: string;
  doc_number: string;
  role_name: "ADMIN" | "BOLETERIA";
  iat: number;
  exp: number;
}

const apiUrl = import.meta.env.VITE_API_URL;
const apiPort = import.meta.env.VITE_PORT;

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}:${apiPort}/v1/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas.");
      }

      const token = response.headers.get("Authorization");
      if (!token) {
        throw new Error("No se recibió el token de autenticación.");
      }

      const decodedToken: DecodedToken = jwtDecode(token);

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("role", decodedToken.role_name);

      if (decodedToken.role_name === "ADMIN") {
        navigate("/admin-dashboard");
      } else if (decodedToken.role_name === "BOLETERIA") {
        navigate("/boleteria");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="absolute top-0 left-0 h-full w-full bg-pattern bg-cover"></div>

      <form onSubmit={handleLogin} className="relative z-10 p-8 max-w-xs w-full">
        <h2 className="sm:text-2xl lg:text-4xl font-bold text-white text-center mb-6">Iniciar sesión</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="sm:text-xl lg:text-2xl font-bold text-white mb-6">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="USUARIO"
            className="w-full sm:px-3 sm:py-3 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6 relative">
          <label className="sm:text-xl lg:text-2xl font-bold text-white mb-6">Contraseña</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="CONTRASEÑA"
            className="w-full p-3 rounded-full bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
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
