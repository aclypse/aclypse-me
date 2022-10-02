import * as React from "react";
import { FC } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import ContentLayout from "./content-layout";

const ProjectItem: FC<{ data: GatsbyTypes.ProjectByIdQuery }> = props => {
  const { frontmatter, body } = props.data.mdx!;
  const { title, author, keywords, description } =
    props.data.site!.siteMetadata!;

  return (
    <ContentLayout
      postTitle={frontmatter?.title!}
      title={`${frontmatter?.title!} | ${title!}`}
      description={description!}
      author={author!}
      keywords={keywords!}
    >
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

export default ProjectItem;
