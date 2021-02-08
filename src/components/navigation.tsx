import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Navigation = () => {
  return (
    <Nav>
      <UL>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </UL>
    </Nav>
  );
};

const Nav = styled.nav({
  display: "flex",
});

const UL = styled.ul({
  display: "flex",

  "& > li": {
    padding: "0 10px",
  },
});

export default Navigation;
