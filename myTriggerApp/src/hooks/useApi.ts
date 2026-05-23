import { useState, useEffect, useCallback } from 'react';
import apiService from '../services/api';

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const useFetch = <T,>(url: string) => {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const result = await apiService.get<T>(url);
      setState({ data: result, loading: false, error: null });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error : new Error('Unknown error'),
      });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData,
  };
};

interface UsePostState {
  loading: boolean;
  error: Error | null;
  success: boolean;
}

export const usePost = <T, R>(url: string) => {
  const [state, setState] = useState<UsePostState>({
    loading: false,
    error: null,
    success: false,
  });

  const postData = useCallback(
    async (data: T) => {
      setState({ loading: true, error: null, success: false });
      try {
        await apiService.post<R>(url, data);
        setState({ loading: false, error: null, success: true });
        return true;
      } catch (error) {
        setState({
          loading: false,
          error: error instanceof Error ? error : new Error('Unknown error'),
          success: false,
        });
        return false;
      }
    },
    [url]
  );

  return {
    ...state,
    postData,
  };
};

export const usePut = <T, R>(url: string) => {
  const [state, setState] = useState<UsePostState>({
    loading: false,
    error: null,
    success: false,
  });

  const putData = useCallback(
    async (data: T) => {
      setState({ loading: true, error: null, success: false });
      try {
        await apiService.put<R>(url, data);
        setState({ loading: false, error: null, success: true });
        return true;
      } catch (error) {
        setState({
          loading: false,
          error: error instanceof Error ? error : new Error('Unknown error'),
          success: false,
        });
        return false;
      }
    },
    [url]
  );

  return {
    ...state,
    putData,
  };
};

export const useDelete = (url: string) => {
  const [state, setState] = useState<UsePostState>({
    loading: false,
    error: null,
    success: false,
  });

  const deleteData = useCallback(async () => {
    setState({ loading: true, error: null, success: false });
    try {
      await apiService.delete(url);
      setState({ loading: false, error: null, success: true });
      return true;
    } catch (error) {
      setState({
        loading: false,
        error: error instanceof Error ? error : new Error('Unknown error'),
        success: false,
      });
      return false;
    }
  }, [url]);

  return {
    ...state,
    deleteData,
  };
};
