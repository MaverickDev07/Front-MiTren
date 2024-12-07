import { useState } from "react";
import { updateData } from "@/services/apiService";

const useUpdate = <T>(endpoint: string, token?: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const update = async (body: object) => {
    try {
      setLoading(true);
      const result = await updateData(endpoint, body, token);
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, update };
};

export default useUpdate;
