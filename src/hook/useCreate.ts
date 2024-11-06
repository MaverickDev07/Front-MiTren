import { useState } from 'react';
import { createData } from '@/services/apiService';

const useCreate = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (body: object) => {
    try {
      setLoading(true);
      const result = await createData(endpoint, body);
      setData(result);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, create };
};

export default useCreate;
