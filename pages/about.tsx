import * as React from 'react';

import { AdminLayout } from '@/components/layouts';
import { Box, Typography } from '@mui/material';

export interface AboutProps {}

export default function About(props: AboutProps) {
  return (
    <main className="h-screen bg-white">
      <Box>
        <Typography component="h1" variant="h3" color="primary.main">
          About Page
        </Typography>
      </Box>
    </main>
  );
}

About.Layout = AdminLayout;
