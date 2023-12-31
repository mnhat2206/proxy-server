import { Roboto, Heebo } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const heebo = Heebo({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00A8CC',
      light: '#EDF7FA',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243D',
    },
  },
  typography: {
    fontFamily: heebo.style.fontFamily,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',

          '@media (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',

          '@media (min-width: 860px)': {
            maxWidth: '860px',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: 'black',

          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
      variants: [
        {
          props: { color: 'text.primary' },
          style: {
            '&:hover, &.active': {
              color: 'text.primary',
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '18px',
          fontWeight: 'bold',
          paddingInline: 2,
        },
      },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: 'black',
            color: 'white',
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);
