import React, { FC } from "react";
import styled from "@emotion/styled";

import PageLayout from "./page-layout";
import Footer from "./footer";

import Instagram from "assets/instagram.svg";
import Facebook from "assets/facebook.svg";
import ArtStation from "assets/artstation.svg";
import Tumblr from "assets/tumblr.svg";

const Contacts: FC<{}> = () => {
  return (
    <PageLayout id="contacts">
      <Container>
        <Wrapper>
          <Content>
            <Header>Contacts</Header>
            <Paragraph>You can find me on the social networks:</Paragraph>
            <List>
              <li>
                <a
                  href="https://www.instagram.com/aclypse.me"
                  title="Aclypse's Instagram Art Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                  <span>@aclypse.me</span>
                </a>
                <span className="description">&nbsp;- art</span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aclypse_aclypse"
                  title="Aclypse's Instagram Personal Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                  <span>@aclypse_aclypse</span>
                </a>
                <span className="description">&nbsp;-&nbsp;personal</span>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/aclypseme"
                  title="Aclypse's Facebook Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                  <span>aclypseme</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aclypse.artstation.com"
                  title="Aclypse's ArtStation Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArtStation />
                  <span>aclypse.artstation.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aclypse.tumblr.com"
                  title="Aclypse's Tumblr Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tumblr />
                  <span>aclypse.tumblr.com</span>
                </a>
              </li>
            </List>
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

    "& span.description": {
      display: "none",
    },
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
  paddingBottom: "1.5rem",
});

const List = styled.ul({
  fontSize: "1.5rem",

  "& svg": {
    width: "2rem",
    height: "2rem",
  },

  "& li": {
    display: "flex",
    height: "2.75rem",
    alignItems: "center",
  },

  "& a": {
    display: "flex",
    alignItems: "center",
  },

  "& a > span": {
    paddingLeft: "0.75rem",
  },
});

export default Contacts;
