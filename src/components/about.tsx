import React, { FC } from "react";
import styled from "@emotion/styled";
import PageLayout from "./page-layout";

const About: FC<{}> = () => {
  return (
    <PageLayout id="about">
      <Container>
        <Wrapper>
          <Header>About</Header>
          <Content>
            <Paragraph>
              I was born in Khmelnytskyi, Ukraine. From what I can remember, a
              paper with a pencil have always been in my hand. Ever since I was
              little I knew that art will always be part of my life. Before I
              found the magical world of design I thought my true vocation is to
              become an illustrator. At this point of my life I'm a college
              student specializing in art and applied design, but my passion
              stands for graphic and digital design. Aside from all the artistic
              stuff I also have hobbies in different spheres (and passion for
              coffee). My main goal is to present unusual and unique solutions
              for this world.
            </Paragraph>
            <Image src={"profile.jpg"} alt="Photo of myself" />
          </Content>
        </Wrapper>
      </Container>
    </PageLayout>
  );
};

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
});

const Wrapper = styled.div({
  padding: "4.125rem 8.75rem",
  fontSize: "3rem",
  fontWeight: 700,
  color: "#0f1c2e",
  backgroundColor: "#f9bc3c",
  maxHeight: "80vh",

  "@media only screen and (max-width: 768px)": {
    padding: "2.5rem 2.5rem",
    height: "auto",
    fontSize: "1.5rem",
  },
});

const Content = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",

  "@media only screen and (max-width: 768px)": {
    flexDirection: "column-reverse",
  },
});

const Header = styled.h2({
  textTransform: "uppercase",
  paddingBottom: "2rem",
});

const Paragraph = styled.p({
  fontSize: "1.5rem",
  fontWeight: "normal",
  paddingRight: "2rem",

  "@media only screen and (max-width: 1024px)": {
    paddingRight: "0",
    paddingTop: "1rem",
    fontSize: "1.2rem",
  },
});

const Image = styled.img({
  width: "25%",
  height: "auto",

  "@media only screen and (max-width: 1024px)": {
    width: "auto",
    height: "160px",
  },
});

export default About;
