import React from 'react';

import Card from 'components/Card/Card';

import { StyledPostList } from './PostList.styles';

const PostList = ({ posts }) => (
  <StyledPostList>
    {posts &&
      posts.map(({ title, slug, date, excerpt }) => (
        <Card
          key={slug}
          excerpt={excerpt}
          title={title}
          slug={slug}
          date={date}
        />
      ))}
  </StyledPostList>
);

export default PostList;
