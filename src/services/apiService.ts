

const apiUrl = import.meta.env.VITE_API_URL;
const apiPort = import.meta.env.VITE_PORT;

export const fetchData = async (endpoint: string) => {
    try {
      const response = await fetch(`${apiUrl}:${apiPort}${endpoint}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error al recuperar datos: ${error}`);
    }
  };
  