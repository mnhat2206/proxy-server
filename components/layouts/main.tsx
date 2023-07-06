import * as React from 'react';
import { LayoutProps } from '@/models';
import { Header, Footer } from '@/components/common';
import { Box, Stack } from '@mui/material';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight={'100vh'}>
      <Header />
      <Box component={'main'} flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
