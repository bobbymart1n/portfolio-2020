import React, { Fragment } from 'react';

import { StyledPortfolioList } from './PortfolioList.styles';

const PortfolioList = ({ portfolioPieces }) => (
  <StyledPortfolioList>
    <h3>My latest project:</h3>
    {portfolioPieces &&
      portfolioPieces.map((piece) => (
        <Fragment>
          <img
            src={piece.screenshot[0].url}
            alt={piece.title}
            css='max-width: 100%;'
          />
          <div key={piece.id}>{piece.title}</div>
        </Fragment>
      ))}
  </StyledPortfolioList>
);

export default PortfolioList;
