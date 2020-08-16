import React from 'react';

import Card from 'components/Card/Card';

import { StyledPostList } from './PostList.styles';

const PostList = ({ posts }) => (
  <StyledPostList>
    {posts &&
      posts.map(({ title, slug }) => (
        <Card key={slug} title={title} slug={slug} />
      ))}
  </StyledPostList>
);

export default PostList;
