import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

import {
  StyledPortfolioPiece,
  StyledPortfolioPieceCloseButton,
  StyledPortfolioPieceDescription,
  StyledPortfolioPieceImage,
} from './Portfolio.styles';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URI);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { portfolioPiece } = await graphcms.request(
    `
    query PortfolioPiecePageQuery($slug: String!) {
      portfolioPiece(where: { slug: $slug }) {
        title
        slug
        projectHighlights
        projectLink
        screenshot {
          url
        }
      }
    }
  `,
    {
      slug: params.slug,
    },
  );

  return {
    props: {
      portfolioPiece,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { portfolioPieces } = await graphcms.request(`
    {
      portfolioPieces {
        slug
        title
      }
    }
  `);

  return {
    paths: portfolioPieces.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

const onClose = () => {
  return;
};

export default ({ portfolioPiece }) => (
  <StyledPortfolioPiece>
    <Link href='/'>
      <StyledPortfolioPieceCloseButton />
    </Link>
    {portfolioPiece.screenshot && (
      <StyledPortfolioPieceImage
        src={portfolioPiece.screenshot[0].url}
        alt='cover image'
      />
    )}
    <StyledPortfolioPieceDescription>
      <h1>{portfolioPiece.title}</h1>
      <p>{portfolioPiece.projectHighlights}</p>
      <a>{portfolioPiece.projectLink}</a>
    </StyledPortfolioPieceDescription>
  </StyledPortfolioPiece>
);
