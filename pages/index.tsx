import { Seo } from '@/components/common';
import { HeroSection, RecentPosts, FeatureWork } from '@/components/home';
import { MainLayout } from '@/components/layouts';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import { title } from 'process';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box>
      <Seo
        data={{
          title: 'SEO with NextJS',
          description: 'Description',
          url: 'https://cready-admin.netlify.app/login',
          thumbnailUrl:
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80',
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWork />
    </Box>
  );
}

Home.Layout = MainLayout;
