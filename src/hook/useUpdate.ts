import { useState } from 'react';
import { updateData } from '@/services/apiService';

const useUpdate = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const update = async (body: object) => {
    try {
      setLoading(true);
      const result = await updateData(endpoint, body);
      setData(result);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, update };
};

export default useUpdate;
