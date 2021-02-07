import React, { FC } from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "./layout";

const PostLayout: FC<{ data: TData }> = (props) => {
  const { frontmatter, body } = props.data.mdx;
  return (
    <Layout>
      <main>
        <h1>{frontmatter.title}</h1>
        <p>{new Date(frontmatter.date).toLocaleString()}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </main>
    </Layout>
  );
};

type TData = {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
      date: string;
    };
  };
};

export const query = graphql`
  query PostsById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`;

export default PostLayout;
