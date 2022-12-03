import * as React from "react";
import { FC } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useSwipeable } from "react-swipeable";

import ContentLayout from "./content-layout";

const PortfolioItem: FC<{ data: GatsbyTypes.PortfolioByIdQuery }> = props => {
  const { frontmatter, body } = props.data.mdx!;
  const { title, author, keywords, description } =
    props.data.site!.siteMetadata!;

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("swiped left"),
    onSwipedRight: () => console.log("swiped right"),
  });

  return (
    <ContentLayout
      {...handlers}
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
