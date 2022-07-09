import React, { FC } from "react";
import { graphql } from "gatsby";

import Landing from "@components/landing";
import About from "@components/about";
import Projects from "@components/projects";
import Portfolio from "@components/portfolio";
import Contact from "@components/contact";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Portfolio />
      <Contact />
    </>
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

export default IndexPage;
