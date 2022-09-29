import * as React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import { Global, css, ThemeProvider } from "@emotion/react";

import cssReset from "@eaze/css-reset";

import { lightTheme } from "@themes/light";

import Footer from "./footer";
import Header from "./header";

const theme = lightTheme;

cssReset();

const ContentLayout: FC<{
  title: string;
  children: React.ReactNode;
}> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Container>
        <Header />
        <Main>
          <Section>
            <h1>{props.title}</h1>
            {props.children}
          </Section>
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default ContentLayout;

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100vh",
});

const Main = styled.main({
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  backgroundColor: "#0f1c2e",
  color: "#f1f1e6",
  flex: 1,
  marginTop: "8rem",
});

const Section = styled.section({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "2rem 8.75rem 2rem",
});

// const Content = styled.div({
//   backgroundColor: "#f9bc3c",
//   padding: "4.125rem 8.75rem",
//   fontSize: "3rem",
//   fontWeight: 700,
// });

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
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    padding-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    padding-bottom: 0.25rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    padding-bottom: 0.25rem;
  }

  h6 {
    font-size: 0.875rem;
    font-weight: 600;
    padding-bottom: 0.25rem;
  }

  ul {
    list-style: disc;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.5;
    padding-bottom: 1.5rem;
  }

  // ::-webkit-scrollbar {
  //   width: 0; /* Remove scrollbar space */
  //   background: transparent; /* Optional: just make scrollbar invisible */
  // }

  .openMenu {
    display: flex !important;
  }
`;
