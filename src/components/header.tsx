import React from "react";
import styled from "@emotion/styled";
import Navigation from "./navigation";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>
        <a href="/">Diana Mykhaylova</a>
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
});

export default Header;
