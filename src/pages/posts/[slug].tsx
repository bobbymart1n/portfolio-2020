import { Fragment } from 'react';
import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URI);

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
    `
    query PostPageQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        slug
        content {
          text
        }
        coverImage {
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
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(`
    {
      posts {
        slug
        title
      }
    }
  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default ({ post }) => (
  <Fragment>
    <h1>{post.title}</h1>
    {post.coverImage && <img src={post.coverImage.url} alt='cover image' />}
    <p>{post.content.text}</p>
  </Fragment>
);
