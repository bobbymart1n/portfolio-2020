import { Fragment } from 'react';
import { getPosts } from 'api/posts';
import PostList from 'components/PostList/PostList';
import Socials from 'components/Socials/Socials';

export default ({ posts }) => (
  <Fragment>
    <Socials />
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
