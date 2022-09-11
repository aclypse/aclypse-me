import React, { FC } from "react";
import styled from "@emotion/styled";
import PageLayout from "./page-layout";

import Instagram from "assets/instagram.svg";
import Facebook from "assets/facebook.svg";
import GitHub from "assets/github.svg";

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
        <Footer>
          <Paragraph>
            <a
              href="https://www.facebook.com/aclypseme"
              title="Aclypse's Instagram Profile"
              about="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.instagram.com/aclypse_aclypse"
              title="Aclypse's Facebook Profile"
              about="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://github.com/aclypse"
              title="Aclypse's GitHub Profile"
              about="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </Paragraph>
        </Footer>
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
});

const Wrapper = styled.div({
  display: "flex",
  flex: 1,
  alignItems: "center",
  backgroundColor: "#0f1c2e",
});

const Footer = styled.footer({
  padding: "2.5rem 8.75rem",
  fontSize: "3rem",
  fontWeight: 700,
  color: "#f1f1e6",
  backgroundColor: "#f9bc3c",
});

const Header = styled.h2({
  fontSize: "3rem",
  fontWeight: 700,
  textTransform: "uppercase",
});

const Paragraph = styled.p({
  fontSize: "1.5rem",
  fontWeight: "normal",
  display: "flex",
  justifyContent: "center",

  "& svg": {
    margin: "0 1rem",
    width: "2rem",
    height: "2rem",
  },
});

export default Contacts;
