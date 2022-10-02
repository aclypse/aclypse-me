import React, { FC } from "react";

import { Global, css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import { lightTheme } from "@themes/light";

const theme = lightTheme;

import "../css-reset.css";

import Header from "@components/header";
import NotFound from "@components/not-found";
import Footer from "@components/footer";

const NotFoundPage: FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Container>
        <Header />
        <Main>
          <NotFound />
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
});

const Main = styled.main({
  width: "100%",
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
});

const globalStyles = css`
  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
    overflow: scroll;
    overflow-x: hidden;
    font-family: "Segoe UI", Arial, sans-serif !important;
    background-color: #0f1c2e;
  }

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  .openMenu {
    display: flex !important;
  }

  #not-found {
    height: auto;
  }
`;

export default NotFoundPage;
