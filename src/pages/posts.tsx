import React, { FC } from "react";
import { graphql, Link } from "gatsby";

import Layout from "@components/layout";

const PostsPage: FC<{ data: TData }> = (props) => {
  const { edges } = props.data.allMdx;

  return (
    <Layout>
      <main>
        <h1>Posts</h1>
        <ul>
          {edges.map((edge) => (
            <li key={edge.node.id}>
              <Link to={edge.node.fields.slug}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
              <p>{new Date(edge.node.frontmatter.date).toLocaleDateString()}</p>
              <p>{edge.node.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

type TData = {
  allMdx: {
    edges: Array<{
      node: {
        id: string;
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          date: string;
        };
      };
    }>;
  };
};

export const query = graphql`
  query PostsPageQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default PostsPage;
