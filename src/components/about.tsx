import React, { FC } from "react";
import styled from "@emotion/styled";
import PageLayout from "./page-layout";

const About: FC<{}> = () => {
  return (
    <PageLayout id="about">
      <Container>
        <Text>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fugit
            velit ipsa consectetur corporis? Explicabo ipsum, temporibus eveniet
            ipsa qui voluptas totam a perferendis quaerat? Expedita atque
            facilis corrupti accusamus.
          </p>
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

export default About;
