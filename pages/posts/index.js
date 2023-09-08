import AllPosts from '@/components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-09-07',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-09-07',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-09-07',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with Nextjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-09-09',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
