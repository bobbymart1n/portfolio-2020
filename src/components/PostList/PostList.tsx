import React, { FC } from 'react';

import Card from 'components/Card/Card';

import { StyledPostList } from './PostList.styles';

type Posts = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
};

type Props = {
  posts: Posts[];
};

const PostList: FC<Props> = ({ posts }) => (
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
