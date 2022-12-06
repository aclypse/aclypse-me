import * as React from "react";
import { FC } from "react";
import styled from "@emotion/styled";
import { graphql, navigate } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useSwipeable } from "react-swipeable";

import ContentLayout from "./content-layout";

const ProjectItem: FC<{ data: GatsbyTypes.ProjectByIdQuery }> = props => {
  const { frontmatter, body, fields } = props.data.mdx!;
  const { title, author, keywords, description } =
    props.data.site!.siteMetadata!;

  const { edges } = props.data.allMdx!;
  const idx = edges.findIndex(edge => edge.node.fields?.slug === fields?.slug);
  const prev = idx - 1 < 0 ? edges[edges.length - 1] : edges[idx - 1];
  const next = idx + 1 === edges.length ? edges[0] : edges[idx + 1];

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      navigate(next!.node.fields!.slug!);
    },
    onSwipedRight: () => {
      navigate(prev!.node.fields!.slug!);
    },
  });

  return (
    <ContentLayout
      postTitle={frontmatter?.title!}
      title={`${frontmatter?.title!} | ${title!}`}
      description={description!}
      author={author!}
      keywords={keywords!}
    >
      <Container {...handlers}>
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { type: { eq: "project" } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
        }
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
