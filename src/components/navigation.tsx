import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";

const Navigation: FC = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  useEffect(() => {
    // Get all sections that have an ID defined
    const sections: NodeListOf<HTMLElement> =
      document.querySelectorAll("section[id]");
    // Add an event listener listening for scroll
    const navHighlighter = () => {
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
          if (!isClicked && location.hash !== `#${sectionId}`) {
            location.hash = sectionId || "";
            setIsClicked(false);
          }
        } else {
          document
            .querySelector("nav a[href*=" + sectionId + "]")!
            .classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", navHighlighter);

    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, [isClicked]);

  return (
    <Nav id="navigation">
      <ul>
        <li>
          <a href="#about" onClick={() => setIsClicked(true)}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsClicked(true)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setIsClicked(true)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsClicked(true)}>
            Contact
          </a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav(() => ({
  marginLeft: "auto",
  display: "flex",

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

  "@media only screen and (max-width: 768px)": {
    position: "absolute",
    display: "none",
    top: "4rem",
    left: 0,
    backgroundColor: "#f9bc3c",
    width: "100%",

    ul: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
    },

    "ul > li": {
      padding: "0.3rem 0",
    },
  },
}));

export default Navigation;
