import { Fragment } from 'react';
import { getPosts } from 'api/posts';
import { getPortfolioPieces } from 'api/portfolio';
import Container from 'components/Container/Container';
import PostList from 'components/PostList/PostList';
import Socials from 'components/Socials/Socials';
import PortfolioList from 'components/PortfolioList/PortfolioList';

export default ({ posts, portfolioPieces }) => (
  <Fragment>
    <Socials />
    <Container>
      <PostList posts={posts} />
      <PortfolioList portfolioPieces={portfolioPieces} />
    </Container>
  </Fragment>
);

export async function getStaticProps() {
  const posts = await getPosts();
  const portfolioPieces = await getPortfolioPieces();

  return {
    props: {
      posts,
      portfolioPieces,
    },
  };
}
