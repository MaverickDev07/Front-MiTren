import { useState, useEffect } from "react";
import { fetchData } from "@/services/apiService";

const useFetch = <T>(endpoint: string, token?: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchData(endpoint, token);
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [endpoint, token]);
  return { data, loading, error };
};

export default useFetch;