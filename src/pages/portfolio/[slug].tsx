import { GetStaticProps, GetStaticPaths } from 'next';
import { GraphQLClient } from 'graphql-request';

import {
  StyledPortfolioPiece,
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

export default ({ portfolioPiece }) => (
  <StyledPortfolioPiece>
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
