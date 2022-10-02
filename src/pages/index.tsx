import React, { FC } from "react";
import { graphql } from "gatsby";

import { Global, css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import { lightTheme } from "@themes/light";
import "../css-reset.css";

const theme = lightTheme;

import Header from "@components/header";
import Landing from "@components/landing";
import About from "@components/about";
import Projects from "@components/projects";
import Portfolio from "@components/portfolio";
import Contacts from "@components/contacts";
import SEO from "@components/seo";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
}> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <SEO
        title={props.data.site?.siteMetadata?.title || ""}
        author={props.data.site?.siteMetadata?.author || ""}
        description={props.data.site?.siteMetadata?.description || ""}
        keywords={props.data.site?.siteMetadata?.keywords || ""}
      />
      <Header />
      <Main>
        <Landing />
        <About />
        <Projects />
        <Portfolio />
        <Contacts />
      </Main>
    </ThemeProvider>
  );
};

export const query = graphql`
  query HomePageData {
    site {
      siteMetadata {
        title
        author
        keywords
        description
      }
    }
  }
`;

const Main = styled.main({
  width: "fit-content",
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

export default IndexPage;
