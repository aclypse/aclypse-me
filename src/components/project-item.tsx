import * as React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
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
      <Container>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </ContentLayout>
  );
};

const Container = styled.div({
  "& em": {
    fontStyle: "italic",
  },

  "& strong": {
    fontWeight: "bold",
  },

  "& .image-container": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: "1.5rem",

    p: {
      flex: 1,
      padding: "0 1rem",
    },

    "@media only screen and (max-width: 768px)": {
      flexDirection: "column",

      p: {
        paddingBottom: "1.5rem",
      },
    },
  },
});

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
