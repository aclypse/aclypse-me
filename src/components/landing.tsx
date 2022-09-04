import styled from "@emotion/styled";
import React, { FC } from "react";
import PageLayout from "./page-layout";

const Landing: FC<{}> = () => {
  return (
    <PageLayout id="landing">
      <Container>
        <Text>
          <p>ACLYPSE</p>
          <p>the designer</p>
        </Text>
      </Container>
    </PageLayout>
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
