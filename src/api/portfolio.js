import { GraphQLClient } from 'graphql-request';

const graphCMS = new GraphQLClient(process.env.GRAPHCMS_URI);

export const getPortfolioPieces = async () => {
  const { portfolioPieces } = await graphCMS.request(
    `
    {
      portfolioPieces {
        id
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
  );

  return portfolioPieces;
};
