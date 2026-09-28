import fs from 'fs';
import path from 'path';

const blogsDir = path.join(process.cwd(), 'content/blogs');
const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.json'));

const posts = files.map(file => {
  const content = fs.readFileSync(path.join(blogsDir, file), 'utf-8');
  return JSON.parse(content);
});

const tsContent = `export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  keywords?: string[];
  content: string;
}

export const blogPosts: BlogPost[] = ${JSON.stringify(posts, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'lib/blog-data.ts'), tsContent);
console.log('Compiled blogs into lib/blog-data.ts');
