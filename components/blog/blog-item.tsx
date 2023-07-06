import { Post } from '@/models';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import * as React from 'react';
import { PostItem } from '../common';

export interface BlogItemProps {
  post: Post;
}

export function BlogItem({ post }: BlogItemProps) {
  return (
    <Box>
      <PostItem post={post} />
    </Box>
  );
}
