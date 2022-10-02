import * as React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import { Global, css, ThemeProvider } from "@emotion/react";

import { lightTheme } from "@themes/light";

import Footer from "./footer";
import Header from "./header";

import "../css-reset.css";
import SEO from "./seo";

const theme = lightTheme;

const ContentLayout: FC<{
  postTitle: string;
  title: string;
  author: string;
  keywords: string;
  description: string;
  children: React.ReactNode;
}> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <SEO
        title={props.title}
        author={props.author}
        keywords={props.keywords}
        description={props.description}
      />
      <Container>
        <Header />
        <Main>
          <Section>
            <h1>{props.postTitle}</h1>
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

    "& img": {
      height: "auto",
      maxWidth: "100%",
      maxHeight: "auto",
    },

    "& iframe": {
      height: "auto",
      maxWidth: "100%",
      maxHeight: "auto",
    },
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

  "& a": {
    color: "#f9bc3c",
  },

  "& a:hover": {
    textDecoration: "underline",
  },

  "& th": {
    fontWeight: 600,
  },

  "& th, & td": {
    border: "solid 1px #f1f1e6",
  },

  "& blockquote": {
    display: "block",
    background: "#f9bc3c",
    padding: "1rem 1.125rem 1rem 4rem",
    margin: "0 0 1.125rem",
    position: "relative",

    color: "#0f1c2e",

    borderLeftStyle: "solid",
    borderLeftWidth: "1rem",

    borderLeftColor: "#0f1c2e",
  },

  "& blockquote::before": {
    content: `"\\201C"`,

    fontSize: "6rem",
    fontWeight: "bold",
    color: "#0f1c2e",

    position: "absolute",
    left: "0.4rem",
    top: "-0.8rem",
  },

  "& blockquote::after": {
    content: `""`,
  },

  "& blockquote a": {
    textDecoration: "none",
    background: "#0f1c2e",
    cursor: "pointer",
    padding: "0 0.25rem",
    color: "#f9bc3c",
  },

  "& blockquote a:hover": {
    textDecoration: "underline",
  },

  "& blockquote em": {
    fontStyle: "italic",
  },

  "& blockquote strong": {
    fontStyle: "bold",
  },

  "& iframe": {
    marginBottom: "1.5rem",
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
