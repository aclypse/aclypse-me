import * as React from "react";
import { FC } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import ContentLayout from "./content-layout";

const PortfolioItem: FC<{ data: GatsbyTypes.PortfolioByIdQuery }> = props => {
  const { frontmatter, body } = props.data.mdx!;
  return (
    <ContentLayout title={frontmatter?.title!}>
      <MDXRenderer>{body}</MDXRenderer>
    </ContentLayout>
  );
};

export const query = graphql`
  query PortfolioById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`;

export default PortfolioItem;
