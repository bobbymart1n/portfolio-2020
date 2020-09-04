import React, { FC, Fragment } from 'react';
import Link from 'next/link';

import {
  StyledPortfolioList,
  StyledPortfolioListImage,
} from './PortfolioList.styles';

type Props = {
  portfolioPieces: any[];
};

type Screenshot = {
  url: string;
};

type PortfolioPiece = {
  id: string;
  slug: string;
  screenshot: Screenshot[];
  title: string;
};

const PortfolioList: FC<Props> = ({ portfolioPieces }) => (
  <StyledPortfolioList>
    <h3>My latest project:</h3>
    {portfolioPieces &&
      portfolioPieces.map(({ id, slug, screenshot, title }: PortfolioPiece) => (
        <Fragment key={id}>
          <Link href={`/portfolio/${slug}`}>
            <StyledPortfolioListImage src={screenshot[0].url} alt={title} />
          </Link>
          <div key={id}>{title}</div>
        </Fragment>
      ))}
  </StyledPortfolioList>
);

export default PortfolioList;
