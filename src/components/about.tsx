import React, { FC } from "react";
import Layout from "./layout";

const About: FC<{}> = () => {
  return (
    <Layout>
      <div id="about">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fugit
          velit ipsa consectetur corporis? Explicabo ipsum, temporibus eveniet
          ipsa qui voluptas totam a perferendis quaerat? Expedita atque facilis
          corrupti accusamus.
        </p>
      </div>
    </Layout>
  );
};

export default About;
