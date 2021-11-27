import React, { FC } from "react";

import { Global, css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import { lightTheme } from "@themes/light";

import Footer from "@components/footer";
import AppBar from "@components/app-bar";

const theme = lightTheme;

const Layout: FC<{ aside?: React.ReactChild; location: Location }> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Global styles={globalStyles} />
        <Container>
          <AppBar location={props.location} />
          {props.aside && <aside>{props.aside}</aside>}
          <div>{props.children}</div>
        </Container>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

const Container = styled.div({
  display: "flex",
  flex: 1,
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
