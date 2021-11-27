import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "@components/layout";
import ContentContainer from "@components/content";

const IndexPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = props => {
  const { title, description } = props.data.site?.siteMetadata!;

  return (
    <Layout location={props.location}>
      <ContentContainer title="Welcome">
        <h1>{title}</h1>
        <p>{description}</p>
      </ContentContainer>
    </Layout>
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
