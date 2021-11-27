import React, { FC } from "react";

import { graphql } from "gatsby";

import Layout from "./layout";
import CategoriesList from "./left-pane/categories-list";
import ContentContainer from "./content";
import ArticleListItem from "./article-list-item";

const Category: FC<{
  data: GatsbyTypes.CategoryArticlesByCategoryQuery;
  pageContext: {
    category: string;
  };
  location: Location;
}> = props => {
  const { edges } = props.data.allMdx;

  return (
    <Layout aside={<CategoriesList />} location={props.location}>
      <ContentContainer title={props.pageContext.category}>
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
  query CategoryArticlesByCategory($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { categories: { eq: $category }, published: { eq: true } }
      }
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
            categories
            tags
          }
        }
      }
    }
  }
`;

export default Category;
