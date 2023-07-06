import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from '../common';
import { Post } from '@/models';

export function RecentPosts() {
  const postList: Post[] = [
    {
      id: '1',
      slug: '',
      title: 'Making a design system from scratch',
      publishedDate: '2023-06-16T14:00:00Z',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: '2',
      slug: '',
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: '2023-06-16T14:00:00Z',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        marginTop: 9,
        backgroundColor: 'secondary.light',
        paddingBottom: 4,
        paddingTop: 2,
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5">Recent posts</Typography>

          <Link href="/blog" passHref legacyBehavior>
            <MuiLink display={{ xs: 'none', md: 'inline' }} color="secondary.main">
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
