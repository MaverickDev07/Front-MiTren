import { useState, useEffect } from "react";
import { fetchData } from "@/services/apiService";

const useFetch = <T>(endpoint: string, token?: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataWithToken = async () => {
      try {
        setLoading(true);
        const result = await fetchData(endpoint, token);
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataWithToken();
  }, [endpoint, token]);

  return { data, loading, error };
};

export default useFetch;
