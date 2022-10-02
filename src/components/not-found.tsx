import React, { FC } from "react";
import styled from "@emotion/styled";
import PageLayout from "./page-layout";

const NotFound: FC<{}> = () => {
  return (
    <PageLayout id="not-found">
      <Container>
        <Wrapper>
          <Header>404 - Not Found</Header>
          <Content>
            <Paragraph>
              The page you are looking not found, please try some other query.
            </Paragraph>
          </Content>
        </Wrapper>
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

const Wrapper = styled.div({
  padding: "4.125rem 8.75rem",
  fontSize: "3rem",
  fontWeight: 700,
  color: "#0f1c2e",
  backgroundColor: "#f9bc3c",

  "@media only screen and (max-width: 768px)": {
    padding: "2.5rem 2.5rem",
    height: "auto",
  },
});

const Content = styled.div({
  display: "flex",
  flexDirection: "row",

  "@media only screen and (max-width: 768px)": {
    flexDirection: "column-reverse",
  },
});

const Header = styled.h2({
  textTransform: "uppercase",
  paddingBottom: "2rem",
});

const Paragraph = styled.p({
  fontSize: "1.5rem",
  fontWeight: "normal",
  paddingRight: "2rem",

  "@media only screen and (max-width: 768px)": {
    paddingRight: "0",
    paddingTop: "1rem",
  },
});

export default NotFound;
