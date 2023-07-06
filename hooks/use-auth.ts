import { authApi } from '@/api-client';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';

export const useAuth = (options?: Partial<PublicConfiguration>) => {
  const { data, mutate, error } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = data === undefined && error === undefined;

  const login = async () => {
    await authApi.login({ username: 'testne11', password: '123123' });
    await mutate();
  };

  const logout = async () => {
    await authApi.logout();
    mutate({});
  };

  return {
    data,
    error,
    login,
    logout,
    firstLoading,
  };
};
