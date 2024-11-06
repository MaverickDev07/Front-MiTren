
const apiUrl = import.meta.env.VITE_API_URL;
const apiPort = import.meta.env.VITE_PORT;

const buildUrl = (endpoint: string) => `${apiUrl}:${apiPort}${endpoint}`;

export const fetchData = async (endpoint: string) => {
  const response = await fetch(buildUrl(endpoint));
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const createData = async (endpoint: string, body: object) => {
  const response = await fetch(buildUrl(endpoint), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const updateData = async (endpoint: string, body: object) => {
  const response = await fetch(buildUrl(endpoint), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const deleteData = async (endpoint: string) => {
  const response = await fetch(buildUrl(endpoint), {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};
