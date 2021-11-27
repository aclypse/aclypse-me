import React, { FC } from "react";
import { graphql } from "gatsby";

import About from "@components/about";
import Projects from "@components/projects";
import Portfolio from "@components/portfolio";
import Contacts from "@components/contacts";
// import Layout from "@components/layout";
// import ContentContainer from "@components/content";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = () => {
  return (
    <>
      <About />
      <Projects />
      <Portfolio />
      <Contacts />
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
