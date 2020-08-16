import { GraphQLClient } from 'graphql-request';

const graphCMS = new GraphQLClient(process.env.GRAPHCMS_URI);

export const getPosts = async () => {
  const { posts } = await graphCMS.request(
    `
    {
      posts {
        id
        slug
        title
      }
    }
  `,
  );

  return posts;
};
