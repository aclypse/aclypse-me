import React, { FC } from "react";
import styled from "@emotion/styled";
import PageLayout from "./page-layout";

const About: FC<{}> = () => {
  return (
    <PageLayout id="about">
      <Container>
        <Content>
          <Header>About</Header>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel fugit
            velit ipsa consectetur corporis? Explicabo ipsum, temporibus eveniet
            ipsa qui voluptas totam a perferendis quaerat? Expedita atque
            facilis corrupti accusamus.
          </Paragraph>
        </Content>
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

const Content = styled.div({
  padding: "4.125rem 8.75rem",
  fontSize: "3rem",
  fontWeight: 700,
  color: "#f1f1e6",
});

const Header = styled.h2({
  textTransform: "uppercase",
});

const Paragraph = styled.p({
  fontSize: "1.125rem",
  fontWeight: "normal",
});

export default About;
