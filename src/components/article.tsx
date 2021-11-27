import React, { FC } from "react";
import styled from "@emotion/styled";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "./layout";
import ArticlesList from "./asides/articles-list";
import ContentContainer from "./content";
import Comments from "./comments";

const Article: FC<{
  data: GatsbyTypes.ArticleByIdQuery;
  location: Location;
}> = props => {
  const { frontmatter, body } = props.data.mdx!;
  return (
    <Layout aside={<ArticlesList />} location={props.location}>
      <ContentContainer title={frontmatter?.title!}>
        <HeaderContainer>
          <h1>{frontmatter?.title}</h1>
          <span>{new Date(frontmatter?.date!).toLocaleString()}</span>
        </HeaderContainer>
        <p>{props.data.mdx?.fields?.readingTime?.text}</p>
        <main>
          <MDXRenderer>{body}</MDXRenderer>
        </main>
        <Comments
          slug={props.data.mdx?.fields?.slug!}
          title={frontmatter?.title!}
        />
      </ContentContainer>
    </Layout>
  );
};

export const query = graphql`
  query ArticleById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
      }
      fields {
        slug
        readingTime {
          text
          minutes
          time
        }
      }
    }
  }
`;

const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
});

export default Article;
