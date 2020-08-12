import { Fragment } from 'react';
import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URI);

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
    `
    query PostPageQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
      }
    }
  `,
    {
      slug: params.slug,
    },
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { post } = await graphcms.request(`
    {
      post {
        slug
        title
      }
    }
  `);

  console.log(post);

  return {
    paths: post.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default ({ post }) => (
  <Fragment>
    <h1>{post.title}</h1>
  </Fragment>
);
