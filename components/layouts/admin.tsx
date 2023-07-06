import * as React from 'react';
import Header from '@/components/common/headers';
import { LayoutProps } from '@/models';
import Auth from '../common/auth';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <Auth>
      <div>
        <h1>Admin Layout</h1>
        <Header />
        <div>{children}</div>
      </div>
    </Auth>
  );
}
