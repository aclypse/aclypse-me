import React from "react";
import styled from "@emotion/styled";

import Navigation from "./navigation";

const Header = () => {
  const toggle = () => {
    const navElement = document.getElementById("navigation");

    if (!navElement) {
      return;
    }

    navElement.classList.toggle("openMenu");
  };

  return (
    <>
      <HeaderContainer>
        <div>
          <a href="/">Aclypse</a>
        </div>
        <Toggle onClick={toggle}>
          <svg viewBox="0 0 100 80" width="20" height="20">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </Toggle>
        <Navigation />
      </HeaderContainer>
    </>
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

  "@media only screen and (max-width: 768px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
  },
});

const Toggle = styled.div({
  display: "none",

  "@media only screen and (max-width: 768px)": {
    alignSelf: "flex-end",
    display: "initial",
    position: "absolute",
    cursor: "pointer",
  },
});

export default Header;
