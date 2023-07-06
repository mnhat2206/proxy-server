import { Work } from '@/models';
import { Box, Container, Divider, Typography } from '@mui/material';
import { WorkCard } from '../common';

export function FeatureWork() {
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      createAt: '1686724167971',
      updateAt: '1686724167971',
      tagList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dz9hmmrh3/image/upload/w_250/v1686746042/learn-nextjs/item3_tkzfn5.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      createAt: '1686724167971',
      updateAt: '1686724167971',
      tagList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dz9hmmrh3/image/upload/w_250/v1686746037/learn-nextjs/item2_eszqyi.jpg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      createAt: '1686724167971',
      updateAt: '1686724167971',
      tagList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dz9hmmrh3/image/upload/w_250/v1686746032/learn-nextjs/item1_r3jgrv.jpg',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        marginTop: 2,
      }}
    >
      <Container>
        <Typography variant="h5" marginBottom={3}>
          Feature works
        </Typography>

        {workList.map((work) => (
          <Box key={work.id}>
            <WorkCard work={work} />
            <Divider
              sx={{
                mt: 4,
                mb: 4,
              }}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
}
