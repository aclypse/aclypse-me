import styled from "@emotion/styled";
import React, { FC } from "react";
import Layout from "./layout";

const Landing: FC<{}> = () => {
  return (
    <Layout>
      <Container id="landing">
        <Text>
          <p>ACLYPSE</p>
          <p>the designer</p>
        </Text>
      </Container>
    </Layout>
  );
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
});

const Text = styled.div({
  backgroundColor: "#f9bc3c",
  padding: "50px 100px",
});

export default Landing;
