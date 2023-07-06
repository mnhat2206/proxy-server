import { MainLayout } from '@/components/layouts';
import { Box } from '@mui/material';
import * as React from 'react';

export interface WorkProps {}

export default function Work(props: WorkProps) {
  return <Box>Work Page</Box>;
}

Work.Layout = MainLayout;
