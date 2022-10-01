import * as React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import { Global, css, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content="" />
      </Helmet>
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

  "@media only screen and (max-width: 768px)": {
    marginTop: "5rem",
  },

  "& h1": {
    fontSize: "3rem",
    fontWeight: 600,
    paddingBottom: "2rem",
  },

  "& h2": {
    fontSize: "2rem",
    fontWeight: 600,
    paddingBottom: "1rem",
  },

  "& h3": {
    fontSize: "1.5rem",
    fontWeight: 600,
    paddingBottom: "0.5rem",
  },

  "& h4": {
    fontSize: "1.25rem",
    fontWeight: 600,
    paddingBottom: "0.25rem",
  },

  "& h5": {
    fontSize: "1rem",
    fontWeight: 600,
    paddingBottom: "0.25rem",
  },

  "& h6": {
    fontSize: "0.875rem",
    fontWeight: 600,
    paddingBottom: "0.25rem",
  },

  "& ul": {
    listStyle: "disc",
    paddingBottom: "1.5rem",
    paddingLeft: "2rem",
  },

  "& p": {
    fontSize: "1.125rem",
    lineHeight: "1.5",
    paddingBottom: "1.5rem",
  },
});

const Section = styled.section({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "2rem 8.75rem 2rem",

  "@media only screen and (max-width: 768px)": {
    padding: "2.5rem",
  },
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
`;
