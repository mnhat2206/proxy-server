import { Post } from '@/models';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import * as React from 'react';

export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {post.title}
      </Typography>
      <Stack flexWrap="nowrap" mt={2} direction="row">
        <Typography minWidth="120px" variant="body1">
          {format(new Date(post.publishedDate), 'dd MMM yyyy')}{' '}
        </Typography>
        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
        <Typography variant="body1" noWrap>
          {post.tagList.join(', ')}
        </Typography>
      </Stack>
      <Typography variant="body2" mt={1.5}>
        {post.description}
      </Typography>
    </Box>
  );
}
