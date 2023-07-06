import { PostItem } from '@/components/common';
import { MainLayout } from '@/components/layouts';
import { Post } from '@/models';
import { getPostList } from '@/utils/post';
import { Box, Container, Divider, Typography, Link as MuiLink } from '@mui/material';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log(posts);

  return (
    <Box>
      <Container>
        <Typography component="h1">Blog</Typography>
        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`blog/${post.slug}`} passHref legacyBehavior>
                <MuiLink display={{ xs: 'none', md: 'inline' }} color="text.primary">
                  <PostItem post={post} />
                </MuiLink>
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  const postList = await getPostList();
  return {
    props: {
      posts: postList,
    },
  };
};
