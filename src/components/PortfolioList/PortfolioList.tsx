import React, { Fragment } from 'react';
import Link from 'next/link';

import {
  StyledPortfolioList,
  StyledPortfolioListImage,
} from './PortfolioList.styles';

const PortfolioList = ({ portfolioPieces }) => (
  <StyledPortfolioList>
    <h3>My latest project:</h3>
    {portfolioPieces &&
      portfolioPieces.map((piece) => (
        <Fragment key={piece.id}>
          <Link href={`/portfolio/${piece.slug}`}>
            <StyledPortfolioListImage
              src={piece.screenshot[0].url}
              alt={piece.title}
            />
          </Link>
          <div key={piece.id}>{piece.title}</div>
        </Fragment>
      ))}
  </StyledPortfolioList>
);

export default PortfolioList;
