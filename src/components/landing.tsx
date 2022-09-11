import styled from "@emotion/styled";
import React, { FC } from "react";
import PageLayout from "./page-layout";

const Landing: FC<{}> = () => {
  return (
    <PageLayout id="landing">
      <Container>
        <Content>
          <Header>Aclypse</Header>
          <p>the designer and illustrator</p>
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
  backgroundColor: "#f9bc3c",
  padding: "4.125rem 8.75rem",
  fontSize: "3rem",
  fontWeight: 700,
});

const Header = styled.h2({
  textTransform: "uppercase",
});

export default Landing;
