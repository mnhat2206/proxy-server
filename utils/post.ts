import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/models';

const BLOG_FOLDER = path.join(process.cwd(), 'blog');

export const getPostList = async (): Promise<Post[]> => {
  // read all markdown files
  const fileNameList = fs.readdirSync(BLOG_FOLDER);

  const postList: Post[] = [];
  for (const filename of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, filename);
    const fileContens = fs.readFileSync(filePath, 'utf8');

    const { data, excerpt, content } = matter(fileContens, {
      excerpt_separator: '<!-- truncate-->',
    });
    postList.push({
      id: filename,
      slug: data.slug,
      title: data.title,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags,
      publishedDate: data.date,
      description: excerpt || '',
      mdContent: content,
    });
  }

  return postList;
};
