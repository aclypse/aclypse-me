import styled from "@emotion/styled";
import React from "react";
import Navigation from "./navigation";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>Diana Mykhaylova</h2>
      <Navigation />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "space-between",
});

export default Header;
