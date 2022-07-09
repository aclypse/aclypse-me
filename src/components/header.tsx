import React from "react";
import styled from "@emotion/styled";
import Navigation from "./navigation";

import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
  const onAnchorClick = (to: string) => {
    if (to) {
      location.replace(to);
    }
  };

  return (
    <HeaderContainer>
      <h2>
        <AnchorLink to="/" onAnchorLinkClick={onAnchorClick}>
          Aclypse
        </AnchorLink>
      </h2>

      <Navigation />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header({
  position: "fixed",
  left: 0,
  top: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#f9bc3c",
  padding: "20px 100px",
  textTransform: "uppercase",
});

export default Header;
