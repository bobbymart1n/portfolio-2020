import styled, { createGlobalStyle } from 'styled-components';

const StyledLayout = styled.section`
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.light};

  a {
    color: ${(props) => props.theme.colors.light};
  }
`;

const StyledLayoutGlobal = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    background: ${(props) => props.theme.background};
  }

  * {
    box-sizing: border-box;
  }
`;

export { StyledLayout, StyledLayoutGlobal };
