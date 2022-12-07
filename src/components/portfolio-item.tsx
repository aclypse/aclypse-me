import * as React from "react";
import { FC } from "react";
import { graphql, navigate } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useSwipeable } from "react-swipeable";

import ContentLayout from "./content-layout";

const PortfolioItem: FC<{ data: GatsbyTypes.PortfolioByIdQuery }> = props => {
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
    onSwipedDown: () => {
      navigate(prev!.node.fields!.slug!);
    },
    onSwipedUp: () => {
      navigate(next!.node.fields!.slug!);
    },
  });

  return (
    <ContentLayout
      postTitle={frontmatter?.title!}
      title={`${frontmatter?.title!} | ${title!}`}
      description={description!}
      author={author!}
      keywords={keywords!}
      handlers={handlers}
    >
      <div>
        <p>{frontmatter!.description}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
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
        description
      }
      fields {
        slug
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { type: { eq: "portfolio" } }
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

export default PortfolioItem;
