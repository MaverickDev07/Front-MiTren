
const apiUrl = import.meta.env.VITE_API_URL;
const apiPort = import.meta.env.VITE_PORT;

const buildUrl = (endpoint: string) => `${apiUrl}:${apiPort}${endpoint}`;

export const fetchData = async (endpoint: string, token?: string) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(buildUrl(endpoint), { headers });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  
  return response.json();
};

export const createData = async (endpoint: string, body: object, token?: string) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(buildUrl(endpoint), {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const updateData = async (endpoint: string, body: object, token:string) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(buildUrl(endpoint), {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

// export const deleteData = async (endpoint: string) => {
//   const response = await fetch(buildUrl(endpoint), {
//     method: 'DELETE',
//     headers: {"Authorization": `Bearer ${token}`}
//   });
//   if (!response.ok) {
//     throw new Error(`Error: ${response.statusText}`);
//   }
//   return response.json();
// };
