import React, { FC } from "react";
import { graphql, HeadFC } from "gatsby";

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
}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
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

export const Head: HeadFC<GatsbyTypes.HomePageDataQuery> = props => {
  const siteMetadata = props.data.site?.siteMetadata!;
  return (
    <SEO
      title={siteMetadata.title}
      description={siteMetadata.description}
      keywords={siteMetadata.keywords}
      author={siteMetadata.author}
    />
  );
};

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

