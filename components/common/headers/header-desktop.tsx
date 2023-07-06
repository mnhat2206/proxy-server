import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import * as React from 'react';
import { ROUTES_LIST } from './routes';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter();

  return (
    <Box component="header" py={2} display={{ xs: 'none', md: 'block' }}>
      <Container>
        <Stack direction={'row'} justifyContent={'flex-end'}>
          {ROUTES_LIST.map((route) => (
            <Link legacyBehavior={true} key={route.path} href={route.path} passHref>
              <MuiLink
                ml={2}
                component={Link}
                fontWeight={'medium'}
                className={clsx({ active: route.path === router.pathname })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
