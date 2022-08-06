import React, { FC, useEffect } from "react";
import { Global, css } from "@emotion/react";
// import Layout from "@components/layout";
// import ContentContainer from "@components/content";

const TestPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = () => {
  useEffect(() => {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      // Get current scroll position
      let scrollY = window.pageYOffset;

      // Now we loop through sections to get height, top and ID values for each
      sections.forEach(current => {
        const sectionHeight = (current as any).offsetHeight;

        // Original:
        // const sectionTop = current.offsetTop - 50;
        //
        // Alex Turnwall's update:
        // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
        // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
        // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
        // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
        //
        const sectionTop =
          current.getBoundingClientRect().top + window.pageYOffset - 100;
        // current.getBoundingClientRect().top + window.pageYOffset;
        let sectionId = current.getAttribute("id");

        /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            ?.querySelector(".navigation a[href*=" + sectionId + "]")
            ?.classList.add("active");
          // location.hash = sectionId || "";
        } else {
          document
            ?.querySelector(".navigation a[href*=" + sectionId + "]")
            ?.classList.remove("active");
          //  location.hash = sectionId || "";
        }
      });
    }
  });

  return (
    <>
      <Global styles={globalStyles} />
      <header>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main-content">
        <section id="about">
          <h1>About</h1>
          <p>
            This is a fork of{" "}
            <a href="https://codepen.io/dbilanoski/pen/LabpzG">
              the original by Danilo Bilanoski
            </a>
            , updated to allow the sections to be placed inside a relative
            parent. See the JS file comments for details.
          </p>
        </section>
        <section id="projects">
          <h1>projects</h1>
        </section>
        <section id="portfolio">
          <h1>portfolio</h1>
        </section>
        <section id="contacts">
          <h1>Contacts</h1>
        </section>
      </div>
    </>
  );
};

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,600");

  * {
    box-sizing: border-box;
  }

  // html {
  //   scroll-behavior: smooth;
  // }

  header {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  nav ul {
    padding: 0;
  }

  nav li {
    list-style: none;
  }

  nav li a {
    text-decoration: none;
    color: #333;
    padding: 0.6rem 0.3rem;
    font-weight: 400;
    transition: all ease-out 250ms;
  }

  nav li a:hover {
    color: lime;
  }

  section {
    background-color: #f2f2f2;
    height: 100vh;
    margin: 0;
    padding: 2.5rem 4rem;
  }

  section:last-of-type {
    height: 100vh;
  }

  section {
    background-color: #ccc;
  }

  .active {
    color: lime;
    font-weight: 600;
  }
`;

export default TestPage;
