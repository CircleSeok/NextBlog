import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostDate(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { date, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, '');
  const postDate = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postDate;
}

export function getAllPosts() {
  const postFiles = fs.readFileSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostDate(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
