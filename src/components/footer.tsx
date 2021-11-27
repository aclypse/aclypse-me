import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; Sergii Mykhailov, {new Date().getFullYear()}</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer({
  display: "flex",
  justifyContent: "space-between",
});

export default Footer;
