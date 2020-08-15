import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { GraphQLClient } from "graphql-request";

import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";

export async function getStaticProps() {
  const graphCMS = new GraphQLClient(process.env.GRAPHCMS_URI);

  const { posts } = await graphCMS.request(
    `
      {
        posts {
          id
          slug
          title
        }
      }
    `
  );

  return {
    props: {
      posts,
    },
  };
}

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ({ posts }) => {
  return (
    <Layout>
      <Main>
        {posts &&
          posts.map(({ title, slug }) => (
            <Card key={slug} title={title} slug={slug} />
          ))}
      </Main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
};
