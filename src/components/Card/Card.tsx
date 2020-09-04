import React, { FC } from 'react';
import Link from 'next/link';

import { StyledCard, StyledCardHeading, StyledCardDate } from './Card.styles';

type Props = {
  date: string;
  excerpt: string;
  slug: string;
  title: string;
};

const Card: FC<Props> = ({ date, excerpt, slug, title }) => (
  <StyledCard>
    <StyledCardHeading>{title}</StyledCardHeading>
    <StyledCardDate>{date.split('-').reverse().join('.')}</StyledCardDate>
    <p>{excerpt}</p>
    <Link key={slug} href={`/posts/${slug}`}>
      <a>Read more</a>
    </Link>
  </StyledCard>
);

export default Card;
