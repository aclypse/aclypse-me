import React from "react";
import styled from "@emotion/styled";
import Navigation from "./navigation";

const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <a href="/">Aclypse</a>
      </span>
      <Navigation />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header({
  width: "100%",
  position: "fixed",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#f9bc3c",
  height: "4rem",
  padding: "0 2rem",
  textTransform: "uppercase",
});

export default Header;
