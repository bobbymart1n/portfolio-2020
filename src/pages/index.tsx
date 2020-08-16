import { Fragment } from 'react';
import { getPosts } from 'api/posts';
import PostList from 'components/PostList/PostList';

export default ({ posts }) => (
  <Fragment>
    <PostList posts={posts} />
  </Fragment>
);

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
