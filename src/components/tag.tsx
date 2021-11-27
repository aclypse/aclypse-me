import React, { FC } from "react";

import { graphql } from "gatsby";

import Layout from "./layout";
import TagsList from "./left-pane/tags-list";
import ContentContainer from "./content";
import ArticleListItem from "./article-list-item";

const Tag: FC<{
  data: GatsbyTypes.CategoryArticlesByCategoryQuery;
  pageContext: {
    tag: string;
  };
  location: Location;
}> = props => {
  const { edges } = props.data.allMdx;

  return (
    <Layout aside={<TagsList />} location={props.location}>
      <ContentContainer title={`#${props.pageContext.tag}`}>
        {edges.map(edge => (
          <ArticleListItem
            id={edge.node.id}
            slug={edge.node.fields?.slug!}
            title={edge.node.frontmatter?.title!}
            date={edge.node.frontmatter?.date!}
            timeToRead={edge.node.fields?.readingTime?.text!}
            tags={edge.node.frontmatter?.tags}
          />
        ))}
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query CategoryArticlesByTag($tag: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag }, published: { eq: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
            readingTime {
              text
              minutes
              time
            }
          }
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  }
`;

export default Tag;
