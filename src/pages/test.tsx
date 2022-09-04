import React, { FC, useEffect } from "react";
import { Global, css } from "@emotion/react";

const TestPage: FC<{
  data: GatsbyTypes.HomePageDataQuery;
  location: Location;
}> = () => {
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
        const sectionTop =
          current.getBoundingClientRect().top + window.pageYOffset; // - 500;
        let sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            ?.querySelector(".navigation a[href*=" + sectionId + "]")
            ?.classList.add("active");
          location.hash = sectionId || "";
        } else {
          document
            ?.querySelector(".navigation a[href*=" + sectionId + "]")
            ?.classList.remove("active");
        }
      });
    }
  });

  return (
    <>
      <Global styles={globalStyles} />
      <header>
        <nav className="navigation">
          <span>
            <a href="/">Aclypse</a>
          </span>
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
      <main>
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            magnam id quidem odit, voluptatibus eligendi beatae, saepe ullam
            cumque mollitia reprehenderit reiciendis? Nulla commodi non delectus
            amet voluptate similique! Id.
          </p>
        </section>
        <section id="portfolio">
          <h1>portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur cupiditate ipsa sunt necessitatibus officia ducimus
            magnam nisi atque dolores, rerum, neque earum explicabo assumenda
            odio. Voluptatem repellat maxime itaque sequi!
          </p>
        </section>
        <section id="contacts">
          <h1>Contacts</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos ipsam, provident amet exercitationem nemo ipsum eos
            facilis magni, assumenda error, sapiente quaerat! Suscipit, amet!
            Aperiam mollitia hic tempora explicabo sed.
          </p>
        </section>
      </main>
    </>
  );
};

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,600");

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  header {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100%;
  }

  nav {
    display: flex;
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
