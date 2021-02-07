import React, { FC } from "react";

import Layout from "@components/layout";

const AboutPage: FC<{}> = () => {
  return (
    <Layout>
      <main>
        <h2>About page</h2>
        <div>
          <p>Some cool info about myself</p>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
