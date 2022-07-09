import React, { FC } from "react";

import { Global, css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import cssReset from "@eaze/css-reset";

import { lightTheme } from "@themes/light";
import Header from "@components//header";

const theme = lightTheme;

cssReset();

const Layout: FC<{ aside?: React.ReactChild; location?: Location }> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Wrapper>
        <Header />
        <Main>{props.children}</Main>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  paddingTop: 66,
  height: "100vh",

  color: "#0f1c2e",
});

const Main = styled.main({
  display: "flex",
  flex: 1,
  flexDirection: "column",

  backgroundColor: "#0f1c2e",
});

const globalStyles = css`
  html,
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    overflow: hidden;
  }

  a,
  a:hover,
  a:visited,
  a:focus,
  a:active {
    text-decoration: none;
    outline: 0;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-left: 1px solid ${theme.colors.textColor};
    border-top: 1px solid ${theme.colors.textColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.textColor};
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.textColor};
  }
`;

export default Layout;
