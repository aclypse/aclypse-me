import React, { FC, useEffect } from "react";
import styled from "@emotion/styled";

import { graphql, Link, useStaticQuery } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Img from "gatsby-image";

import PageLayout from "./page-layout";

const Portfolio: FC<{}> = () => {
  const { edges } = usePortfolioListQuery();
  const breakpoints = useBreakpoint();
  const [currentStartIndex, setCurrentStartIndex] = React.useState(0);

  let amountOfPortfolioToDisplay = 4;

  if (breakpoints.xl) {
    amountOfPortfolioToDisplay = 4;
  } else if (breakpoints.l) {
    amountOfPortfolioToDisplay = 3;
  } else if (breakpoints.md) {
    amountOfPortfolioToDisplay = 2;
  } else if (breakpoints.sm || breakpoints.xs) {
    amountOfPortfolioToDisplay = 1;
  } else {
    amountOfPortfolioToDisplay = 4;
  }

  const [portfolio, setPortfolios] = React.useState(
    edges.slice(0, amountOfPortfolioToDisplay)
  );

  useEffect(() => {
    let itemsToDisplay = [] as any;

    if (
      currentStartIndex >= 0 &&
      currentStartIndex + amountOfPortfolioToDisplay <= edges.length
    ) {
      itemsToDisplay = edges.slice(
        currentStartIndex,
        currentStartIndex + amountOfPortfolioToDisplay
      );
    } else {
      itemsToDisplay = edges.slice(currentStartIndex, edges.length);
    }

    if (
      itemsToDisplay.length < amountOfPortfolioToDisplay &&
      edges.length >= amountOfPortfolioToDisplay
    ) {
      const difference = amountOfPortfolioToDisplay - itemsToDisplay.length;
      itemsToDisplay = itemsToDisplay.concat(edges.slice(0, difference));
    }

    setPortfolios(itemsToDisplay);
  }, [currentStartIndex, amountOfPortfolioToDisplay]);

  return (
    <PageLayout id="portfolio">
      <Container>
        <Wrapper>
          <Header>Portfolio</Header>
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
            {portfolio.map(({ node }) => {
              if (!node.fields?.slug || !node.frontmatter?.date) {
                return null;
              }

              return (
                <Card key={node.fields.slug}>
                  <Link to={node.fields.slug}>
                    <CardHeader>{node.frontmatter.title}</CardHeader>
                    <CardBody>
                      <Paragraph>
                        {node.frontmatter?.description || node.excerpt}
                      </Paragraph>

                      <Img
                        loading="eager"
                        style={{
                          width: "160px",
                          height: "160px",
                          minWidth: "160px",
                          minHeight: "160px",
                          maxWidth: "160px",
                          maxHeight: "160px",
                        }}
                        fixed={
                          node!.frontmatter!.featuredImage!.childImageSharp!
                            .fixed as any
                        }
                      />
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

const usePortfolioListQuery = () => {
  const { allMarkdownRemark } =
    useStaticQuery<GatsbyTypes.PortfolioListQuery>(graphql`
      query PortfolioList {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {
            frontmatter: { published: { eq: true } }
            fields: { type: { eq: "portfolio" } }
          }
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 80)
              frontmatter {
                title
                date
                description
                featuredImage {
                  childImageSharp {
                    fixed(width: 160, height: 160) {
                      base64
                      width
                      height
                      src
                      srcSet
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `);

  return allMarkdownRemark;
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
});

const CardHeader = styled.h3({
  fontSize: "2rem",
  paddingBottom: "1rem",
});

const CardBody = styled.div({
  display: "flex",
  flexDirection: "row",
});

const Paragraph = styled.p({
  fontSize: "1.5rem",
  fontWeight: "normal",
  paddingRight: "1rem",
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
  },
});

export default Portfolio;
