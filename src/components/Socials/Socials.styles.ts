import styled from 'styled-components';

const StyledSocials = styled.div``;

const StyledSocialsHeading = styled.h2`
  margin: 0;
  margin-bottom: 40px;
`;

const StyledSocialsIcon = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.dark};
  background: ${(props) => props.theme.colors.light};
  margin-right: 16px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledSocialsIconContainer = styled.div`
  display: flex;
`;

export {
  StyledSocials,
  StyledSocialsHeading,
  StyledSocialsIcon,
  StyledSocialsIconContainer,
};
