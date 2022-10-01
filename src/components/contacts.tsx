import React, { FC } from "react";
import styled from "@emotion/styled";

import PageLayout from "./page-layout";
import Footer from "./footer";

const Contacts: FC<{}> = () => {
  return (
    <PageLayout id="contacts">
      <Container>
        <Wrapper>
          <Content>
            <Header>Contacts</Header>
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              fugit velit ipsa consectetur corporis? Explicabo ipsum, temporibus
              eveniet ipsa qui voluptas totam a perferendis quaerat? Expedita
              atque facilis corrupti accusamus.
            </Paragraph>
          </Content>
        </Wrapper>
        <Footer />
      </Container>
    </PageLayout>
  );
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "space-between",
});

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f9bc3c",
  padding: "4.125rem 8.75rem",
  width: "100%",

  "@media only screen and (max-width: 768px)": {
    padding: "2.5rem 2.5rem",
    height: "auto",
  },
});

const Wrapper = styled.div({
  display: "flex",
  flex: 1,
  alignItems: "center",
  backgroundColor: "#0f1c2e",
  justifyContent: "center",
});

const Header = styled.h2({
  fontSize: "3rem",
  fontWeight: 700,
  textTransform: "uppercase",
  paddingBottom: "2rem",
});

const Paragraph = styled.p({
  fontSize: "1.5rem",
  fontWeight: "normal",
  display: "flex",
  justifyContent: "flex-start",

  "& svg": {
    margin: "0 1rem",
    width: "2rem",
    height: "2rem",
  },
});

export default Contacts;
