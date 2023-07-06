import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Container, Icon, Stack, Typography } from '@mui/material';

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://google.com',
    },
    {
      icon: Instagram,
      url: 'https://google.com',
    },
    {
      icon: Twitter,
      url: 'https://google.com',
    },
    {
      icon: LinkedIn,
      url: 'https://google.com',
    },
  ];

  return (
    <Box component={'footer'} textAlign="center" mt={8} py={6}>
      <Container>
        <Stack direction="row" spacing={2} justifyContent="center">
          {socialLinks.map((social, idx) => (
            <Box
              component="a"
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              color="text.primary"
            >
              <Icon component={social.icon} fontSize="large" />
            </Box>
          ))}
        </Stack>
        <Typography>Copyright ©2020 All rights reserved </Typography>
      </Container>
    </Box>
  );
}
