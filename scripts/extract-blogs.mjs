import fs from 'fs';
import path from 'path';

// Using regex to extract the blog posts array from lib/blog-data.ts because we can't easily import a TS file in Node without ts-node
const tsFile = fs.readFileSync(path.join(process.cwd(), 'lib/blog-data.ts'), 'utf-8');

// A safer approach is to just run a quick script that uses the existing Next.js build or we can just parse it manually
// But wait, the file is very simple, we can extract the content between `export const blogPosts = [` and `];`
// Since it's valid JS object structure, we can just use `eval`.
const arrayContent = tsFile.substring(tsFile.indexOf('[') + 1, tsFile.lastIndexOf(']'));
const code = `[${arrayContent}]`;

// Evaluate the string to get the array
const blogPosts = eval(code);

blogPosts.forEach(post => {
  const filePath = path.join(process.cwd(), 'content/blogs', `${post.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2));
  console.log(`Created ${filePath}`);
});
