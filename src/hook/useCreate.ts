import { useState } from "react";
import { createData } from "@/services/apiService";

const useCreate = <T>(endpoint: string, token?: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (body: object) => {
    try {
      setLoading(true);
      const result = await createData(endpoint, body, token);
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, create };
};

export default useCreate;
