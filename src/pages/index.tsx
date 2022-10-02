import React, { FC } from "react";
import { graphql } from "gatsby";

import { Global, css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import cssReset from "@eaze/css-reset";

import { lightTheme } from "@themes/light";

const theme = lightTheme;

cssReset();

import Header from "@components/header";
import Landing from "@components/landing";
import About from "@components/about";
import Projects from "@components/projects";
import Portfolio from "@components/portfolio";
import Contacts from "@components/contacts";
import { Helmet } from "react-helmet";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
}> = props => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Helmet>
        <title>{props.data.site?.siteMetadata?.title}</title>
        <meta
          name="description"
          content={props.data.site?.siteMetadata?.description || ""}
        />
      </Helmet>
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
