const apiUrl = import.meta.env.VITE_API_URL;
const apiPort = import.meta.env.VITE_PORT;

const buildUrl = (endpoint: string) => `${apiUrl}:${apiPort}${endpoint}`;

const addTokenToHeaders = (token?: string): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",

  };
  if (token) {
    headers["Authorization"] = `${token}`;
  }
  return headers;
};

export const fetchData = async (endpoint: string, token?: string) => {
  const response = await fetch(buildUrl(endpoint), {
    method: "GET",
    headers: addTokenToHeaders(token),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const createData = async (endpoint: string, body: object, token?: string) => {
  const response = await fetch(buildUrl(endpoint), {
    method: "POST",
    headers: addTokenToHeaders(token),
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const updateData = async (endpoint: string, body: object, token?: string) => {
  const response = await fetch(buildUrl(endpoint), {
    method: "PUT",
    headers: addTokenToHeaders(token),
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const deleteData = async (endpoint: string, token?: string) => {
  const response = await fetch(buildUrl(endpoint), {
    method: "DELETE",
    headers: addTokenToHeaders(token),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
};
