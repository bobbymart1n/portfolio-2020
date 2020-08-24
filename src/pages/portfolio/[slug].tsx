import { GraphQLClient } from 'graphql-request';

import {
  StyledPortfolioPiece,
  StyledPortfolioPieceImage,
} from './Portfolio.styles';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URI);

export async function getStaticProps({ params }) {
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
}

export async function getStaticPaths() {
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
}

export default ({ portfolioPiece }) => (
  <StyledPortfolioPiece>
    <h1>{portfolioPiece.title}</h1>
    {portfolioPiece.screenshot && (
      <StyledPortfolioPieceImage
        src={portfolioPiece.screenshot[0].url}
        alt='cover image'
      />
    )}
    <p>{portfolioPiece.projectHighlights}</p>
    <a>{portfolioPiece.projectLink}</a>
  </StyledPortfolioPiece>
);
