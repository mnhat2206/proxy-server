import * as React from 'react';
import { authApi } from '@/api-client';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';

export interface LoginProps {}

export default function Login(props: LoginProps) {
  const { data, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login();
      console.log(data);
      console.log('redirect to dashboard');
      router.push('/about');
    } catch (error) {
      console.log('fail to login', error);
    }
  };

  // const handleGetProfile = async () => {
  //   try {
  //     await authApi.getProfile();
  //   } catch (error) {
  //     console.log('fail to get profile', error);
  //   }
  // };

  const handleLogout = async () => {
    try {
      await logout();
      console.log('redirect to logout page');
    } catch (error) {
      console.log('fail to logout', error);
    }
  };

  return (
    <div className="h-screen">
      <h1>Login page</h1>
      <div>data: {JSON.stringify(data || {}, null, 4)}</div>

      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleGetProfile}>Profile</button> */}
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => router.push('/about')}>go to about</button>
    </div>
  );
}
