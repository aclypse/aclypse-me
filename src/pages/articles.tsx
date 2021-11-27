import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "@components/layout";
import ArticlesList from "@components/left-pane/articles-list";
import ContentContainer from "@components/content";
import ArticleListItem from "@components/article-list-item";

const ArticlesPage: FC<{
  data: GatsbyTypes.ArticlesPageDataQuery;
  location: Location;
}> = props => {
  const { edges } = props.data.allMdx;

  return (
    <Layout aside={<ArticlesList />} location={props.location}>
      <ContentContainer title="Articles">
        {edges.map(edge => {
          if (!edge.node.fields?.slug || !edge.node.frontmatter?.date) {
            return null;
          }

          const {
            id,
            fields: { slug, readingTime },
            frontmatter: { title, date, tags },
          } = edge.node;

          return (
            <ArticleListItem
              id={id}
              slug={slug!}
              title={title!}
              date={date!}
              timeToRead={readingTime?.text!}
              tags={tags}
            />
          );
        })}
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query ArticlesPageData {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
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

export default ArticlesPage;
