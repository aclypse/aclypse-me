import React, { FC } from "react";
import { graphql } from "gatsby";

import { Global, css, ThemeProvider } from "@emotion/react";

import cssReset from "@eaze/css-reset";

import { lightTheme } from "@themes/light";
import Header from "@components//header";

const theme = lightTheme;

cssReset();

import Landing from "@components/landing";
import About from "@components/about";
import Projects from "@components/projects";
import Portfolio from "@components/portfolio";
import Contacts from "@components/contacts";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header />
      <main>
        <Landing />
        <About />
        <Projects />
        <Portfolio />
        <Contacts />
      </main>
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

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  .openMenu {
    display: flex !important;
  }
`;

export default IndexPage;
