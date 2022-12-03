import * as React from "react";
import { FC } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import ContentLayout from "./content-layout";

const PortfolioItem: FC<{ data: GatsbyTypes.PortfolioByIdQuery }> = props => {
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
      <p>{frontmatter!.description}</p>
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
