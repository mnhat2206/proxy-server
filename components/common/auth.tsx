import { useAuth } from '@/hooks';
import { LayoutProps } from '@/models';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Auth({ children }: LayoutProps) {
  const { data, firstLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!firstLoading && !data?.username) {
      router.push('/login');
    }
  }, [firstLoading, data, router]);

  if (!data?.username) return <p>Loading...</p>;

  return <div>{children}</div>;
}
