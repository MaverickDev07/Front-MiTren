import { useState } from 'react';
import { deleteData } from '@/services/apiService';

const useDelete = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const remove = async () => {
    try {
      setLoading(true);
      const result = await deleteData(endpoint);
      setData(result);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, remove };
};

export default useDelete;
