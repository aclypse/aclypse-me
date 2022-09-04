import React, { FC, useEffect } from "react";
import { Global, css } from "@emotion/react";

const Test1Page: FC<{
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
            .querySelector(".navigation a[href*=" + sectionId + "]")!
            .classList.add("active");
        } else {
          document
            .querySelector(".navigation a[href*=" + sectionId + "]")!
            .classList.remove("active");
        }
      });
    }
  });

  return (
    <>
      <Global styles={globalStyles} />
      <header>
        <span>
          <a href="/">Aclypse</a>
        </span>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            blanditiis sit. Facilis at repellendus dicta quos aspernatur quas
            excepturi inventore aliquam pariatur ipsa eum ipsam exercitationem
            porro, non, minus saepe.
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
      </div>
    </>
  );
};

const globalStyles = css`
  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-behavior: smooth;
    overflow: scroll;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  header {
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #f9bc3c;
    height: 4rem;
    padding: 0 2rem;
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
    // background-color: #0f1c2e;
    background-color: #fff;
    height: 100vh;
    margin: 0;
    padding: 2.5rem 4rem;
  }

  section:nth-of-type(2n) {
    background-color: #ccc;
  }

  .active {
    color: lime;
    font-weight: 600;
  }
`;

export default Test1Page;
