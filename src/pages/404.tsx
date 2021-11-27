import React, { FC } from "react";
import Layout from "@components/layout";

const NotFoundPage: FC<{ location: Location }> = props => {
  return (
    <Layout location={props.location}>
      <main>
        <title>Not found</title>
        <p>Page not found</p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
