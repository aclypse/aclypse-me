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
  height: "8rem",
  padding: "2.5rem 8.75rem",
  textTransform: "uppercase",
  fontSize: "2.25rem",
  fontWeight: 700,
  boxShadow: "0px 10px 14px 2px rgba(0,0,0,0.5)",

  "& a": {
    color: "#0f1c2e",
  },

  "& a:hover": {
    color: "#f1f1e6",
  },

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
