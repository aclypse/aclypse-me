import * as React from "react";
import styled from "@emotion/styled";

import Instagram from "assets/instagram.svg";
import Facebook from "assets/facebook.svg";
import GitHub from "assets/github.svg";

const Footer = () => (
  <FooterContainer>
    <Paragraph>
      <a
        href="https://www.instagram.com/aclypse_aclypse"
        title="Aclypse's Instagram Profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>
      <a
        href="https://www.facebook.com/aclypseme"
        title="Aclypse's Facebook Profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
      <a
        href="https://github.com/aclypse"
        title="Aclypse's GitHub Profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
    </Paragraph>
  </FooterContainer>
);

const FooterContainer = styled.footer({
  padding: "2.5rem 8.75rem",
  fontSize: "3rem",
  fontWeight: 700,
  color: "#f1f1e6",
  backgroundColor: "#f9bc3c",

  "@media only screen and (max-width: 768px)": {
    padding: "1.125rem 2.5rem",
    height: "auto",
  },
});

const Paragraph = styled.p({
  fontSize: "1.5rem",
  fontWeight: "normal",
  display: "flex",
  justifyContent: "center",
  padding: 0,
  margin: 0,

  "& svg": {
    margin: "0 1rem",
    width: "2rem",
    height: "2rem",
  },
});

export default Footer;
