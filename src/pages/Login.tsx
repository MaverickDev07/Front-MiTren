import { fetchData } from "@/services/apiService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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

      // Almacena el token en sessionStorage por seguridad y gestiona roles
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("role", data.user.role);

      // Redirección basada en el rol
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Inicio de Sesión</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
};

export default Login;
