import styled from 'styled-components';

const StyledPortfolioPiece = styled.div``;

const StyledPortfolioPieceCloseButton = styled.a`
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

const StyledPortfolioPieceDescription = styled.div``;

const StyledPortfolioPieceImage = styled.img`
  max-width: 100%;
`;

export {
  StyledPortfolioPiece,
  StyledPortfolioPieceCloseButton,
  StyledPortfolioPieceDescription,
  StyledPortfolioPieceImage,
};
