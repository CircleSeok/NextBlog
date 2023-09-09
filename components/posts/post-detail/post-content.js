import PostHeader from './post-header';
import styles from './post-content.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
const DUMMY_POSTS = {
  slug: 'getting-started-with-nextjs4',
  title: 'Getting Started with Nextjs',
  image: 'getting-started-nextjs.png',

  date: '2023-09-09',
  content: '# This is a first post',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
