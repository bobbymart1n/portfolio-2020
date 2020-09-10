import styled from 'styled-components';

const StyledPortfolioPagePiece = styled.div``;

const StyledPortfolioPagePieceCloseButton = styled.a`
  position: absolute;
  top: 20px;
  right: 0;
  height: 20px;
  width: 20px;
  text-decoration: none;

  &::after {
    content: 'x';
    position: absolute;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
  }
`;

const StyledPortfolioPagePieceDescription = styled.div``;

const StyledPortfolioPagePieceImage = styled.img`
  max-width: 100%;
`;

export {
  StyledPortfolioPagePiece,
  StyledPortfolioPagePieceCloseButton,
  StyledPortfolioPagePieceDescription,
  StyledPortfolioPagePieceImage,
};
