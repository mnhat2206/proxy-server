import { Box } from '@mui/material';
import * as React from 'react';

export interface HeaderMobileProps {}

export default function HeaderMobile(props: HeaderMobileProps) {
  return (
    <Box py={2} display={{ sm: 'block', md: 'none' }}>
      Header Mobile
    </Box>
  );
}
