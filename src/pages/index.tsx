import { Fragment } from 'react';
import { getPosts } from 'api/posts';
import { getPortfolioPieces } from 'api/portfolio';
import Container from 'components/Container/Container';
import PostList from 'components/PostList/PostList';
import Socials from 'components/Socials/Socials';
import PortfolioList from 'components/PortfolioList/PortfolioList';

type Posts = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

type Screenshot = {
  url: string;
};

type PortfolioPieces = {
  id: string;
  title: string;
  slug: string;
  projectHighlights: string;
  projectLink: string;
  screenshot: Screenshot[];
};

type Props = {
  posts: Posts[];
  portfolioPieces: PortfolioPieces[];
};

export default ({ posts, portfolioPieces }: Props) => (
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
