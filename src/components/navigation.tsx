import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";

const Navigation: FC = () => {
  useEffect(() => {
    // Get all sections that have an ID defined
    const sections: NodeListOf<HTMLElement> =
      document.querySelectorAll("section[id]");
    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);
    function navHighlighter() {
      // Get current scroll position
      let scrollY = window.pageYOffset;
      // Now we loop through sections to get height, top and ID values for each
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        /*
        - If our current scroll position enters the space where current section on screen is,
          add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting
          while looping through sections as an selector
        */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector("nav a[href*=" + sectionId + "]")!
            .classList.add("active");
        } else {
          document
            .querySelector("nav a[href*=" + sectionId + "]")!
            .classList.remove("active");
        }
      });
    }
  });

  return (
    <Nav>
      <ul>
        <li>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav(() => ({
  ul: {
    display: "flex",
    margin: 0,
    padding: 0,
    listStyle: "none",
  },

  "ul > li > a": {
    textDecoration: "none",
    color: "#333",
    padding: "0.6rem 0.3rem",
    fontWeight: 400,
    transition: "all ease-out 250ms",
  },

  "ul > li > a:hover": {
    color: "lime",
  },

  "ul > li > a.active": {
    color: "lime",
  },
}));

export default Navigation;
