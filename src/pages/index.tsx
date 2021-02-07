import React, { FC } from "react";
import { graphql } from "gatsby";

import Layout from "@components/layout";

const IndexPage: FC<{ data: TData }> = (props) => {
  const { title, description } = props.data.site.siteMetadata;

  return (
    <Layout>
      <main>
        <h2>Main page</h2>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </main>
    </Layout>
  );
};

type TData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default IndexPage;
