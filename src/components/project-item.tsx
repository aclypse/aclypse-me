import * as React from "react";
import { FC } from "react";
// import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import ContentLayout from "./content-layout";

const ProjectItem: FC<{ data: GatsbyTypes.ProjectByIdQuery }> = props => {
  const { frontmatter, body } = props.data.mdx!;
  return (
    <ContentLayout title={frontmatter?.title!}>
      <MDXRenderer>{body}</MDXRenderer>
    </ContentLayout>
  );
};

export const query = graphql`
  query ProjectById($id: String!) {
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

export default ProjectItem;

// const Content = styled.div({
//   backgroundColor: "#f9bc3c",
//   padding: "4.125rem 8.75rem",
//   fontSize: "3rem",
//   fontWeight: 700,
// });
