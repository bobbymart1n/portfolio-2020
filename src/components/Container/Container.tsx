import React, { FC } from 'react';

import { StyledContainer } from './Container.styles';

type Props = {
  children: React.ReactNode;
};

const Container: FC<Props> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
