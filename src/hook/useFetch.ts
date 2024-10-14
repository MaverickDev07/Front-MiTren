import { useState, useEffect } from "react";
import { fetchData } from "@/services/apiService";

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchData(endpoint);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    getData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;