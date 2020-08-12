import React from 'react';
import Link from 'next/link';

const Card = ({ slug, title }) => (
  <div>
    <Link key={slug} href={`/posts/${slug}`}>
      <a>{title}</a>
    </Link>
  </div>
);

export default Card;
