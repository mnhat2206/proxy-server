import { Work } from '@/models';
import { Box, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

export interface WorkCardProps {
  work: Work;
}

export function WorkCard({ work }: WorkCardProps) {
  if (!work) return null;
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box
        width={{ xs: '100%', sm: 246 }}
        flexShrink={0}
        position="relative"
        height={{ xs: 230, sm: 180 }}
      >
        <Image fill src={work.thumbnailUrl} alt="Thumbnail Work Card" />
      </Box>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          {work.title}
        </Typography>

        <Stack marginTop={2} direction="row">
          <Chip
            color="secondary"
            size="small"
            label={new Date(Number.parseInt(work.createAt)).getFullYear()}
          />
          <Typography ml={3} color="GrayText">
            {work.tagList.join(', ')}
          </Typography>
        </Stack>

        <Typography marginTop={2}>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
