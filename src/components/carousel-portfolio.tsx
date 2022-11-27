import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";

import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import PageLayout from "./page-layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const CarouselPortfolio: FC<{
  id: string;
  title: string;
  edges: any;
}> = props => {
  const { edges } = props;
  const breakpoints = useBreakpoint();
  const [currentStartIndex, setCurrentStartIndex] = React.useState(0);

  let amountOfProjectsToDisplay = 4;

  if (breakpoints.xl) {
    amountOfProjectsToDisplay = 4;
  } else if (breakpoints.l) {
    amountOfProjectsToDisplay = 3;
  } else if (breakpoints.md) {
    amountOfProjectsToDisplay = 2;
  } else if (breakpoints.sm || breakpoints.xs) {
    amountOfProjectsToDisplay = 1;
  } else {
    amountOfProjectsToDisplay = 4;
  }

  const [projects, setProjects] = React.useState(
    edges.slice(0, amountOfProjectsToDisplay)
  );

  useEffect(() => {
    let itemsToDisplay = [] as any;

    if (
      currentStartIndex >= 0 &&
      currentStartIndex + amountOfProjectsToDisplay <= edges.length
    ) {
      itemsToDisplay = edges.slice(
        currentStartIndex,
        currentStartIndex + amountOfProjectsToDisplay
      );
    } else {
      itemsToDisplay = edges.slice(currentStartIndex, edges.length);
    }

    if (
      itemsToDisplay.length < amountOfProjectsToDisplay &&
      edges.length > amountOfProjectsToDisplay
    ) {
      const difference = amountOfProjectsToDisplay - itemsToDisplay.length;
      itemsToDisplay = itemsToDisplay.concat(edges.slice(0, difference));
    }

    setProjects(itemsToDisplay);
  }, [currentStartIndex, amountOfProjectsToDisplay]);

  return (
    <PageLayout id={props.id}>
      <Container>
        <Wrapper>
          <Header>{props.title}</Header>
          <Grid>
            <ButtonContainer>
              <Button
                onClick={() => {
                  if (currentStartIndex - 1 < 0) {
                    setCurrentStartIndex(edges.length - 1);
                  } else {
                    setCurrentStartIndex(currentStartIndex - 1);
                  }
                }}
              >
                &#8249;
              </Button>
            </ButtonContainer>
            {projects.map(({ node }: any) => {
              if (!node.fields?.slug || !node.frontmatter?.date) {
                return null;
              }

              return (
                <Card key={node.fields.slug}>
                  <Link to={node.fields.slug}>
                    <CardHeader>{node.frontmatter.title}</CardHeader>
                    <CardBody>
                      <MDXRenderer>{node.body}</MDXRenderer>
                    </CardBody>
                  </Link>
                </Card>
              );
            })}
            <ButtonContainer>
              <Button
                onClick={() => {
                  if (currentStartIndex + 1 > edges.length - 1) {
                    setCurrentStartIndex(0);
                  } else {
                    setCurrentStartIndex(currentStartIndex + 1);
                  }
                }}
              >
                &#8250;
              </Button>
            </ButtonContainer>
          </Grid>
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

const Header = styled.h2({
  textTransform: "uppercase",
  paddingBottom: "0.5rem",
});

const Wrapper = styled.div({
  padding: "4.125rem 8.75rem",
  fontSize: "3rem",
  fontWeight: 700,
  color: "#0f1c2e",
  backgroundColor: "#f9bc3c",

  "@media only screen and (max-width: 768px)": {
    padding: "2.5rem 2.5rem",
    height: "auto",
  },
});

const CardHeader = styled.h3({
  fontSize: "1.5rem",
  paddingBottom: "1rem",
});

const CardBody = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "@media only screen and (max-width: 768px)": {
    flexDirection: "column-reverse",
  },
});

const Grid = styled.div({
  display: "flex",
  margin: "0 -1.8rem",
});

const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Button = styled.div({
  borderRadius: "50%",
  width: "3rem",
  height: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",

  "&:hover": {
    backgroundColor: "#0f1c2e",
    color: "#f9bc3c",
    cursor: "pointer",
  },
});

const Card = styled.div({
  display: "flex",
  flexDirection: "row",
  flex: "25%",
  padding: "1.8rem 1.8rem",
  maxWidth: "25%",

  "@media screen and (max-width: 720px)": {
    flex: "100%",
    maxWidth: "100%",
    padding: "1rem",
  },

  "@media screen and (min-width: 721px) and (max-width: 1024px)": {
    flex: "50%",
    maxWidth: "50%",
  },

  "@media screen and (min-width: 1025px) and (max-width: 1536px)": {
    flex: "33.3%",
    maxWidth: "33.3%",
  },

  "@media screen and (min-width: 1537px)": {
    flex: "25%",
    maxWidth: "25%",
  },

  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.5s ease-in-out",
    boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.5)",
    backgroundColor: "#f9bc3c",
  },

  "& a": {
    color: "#0f1c2e",
    flex: 1,
  },
});

export default CarouselPortfolio;
