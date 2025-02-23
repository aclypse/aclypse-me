import React, { FC } from "react";
import styled from "@emotion/styled";

import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";

import Carousel from "./carousel";

const Portfolio: FC<{}> = () => {
  const { edges } = usePortfolioListQuery();

  return (
    <Carousel
      id="portfolio"
      title="Portfolio"
      edges={edges}
      render={node => {
        return (
          <CardContainer>
            <MDXProvider
              components={{
                a: props => <>{props.children}</>,
              }}
            >
              <Img
                loading="eager"
                style={{
                  minWidth: "240px",
                }}
                fixed={
                  node.frontmatter?.featuredImage?.childImageSharp?.fixed as any
                }
                alt={node.frontmatter?.title || ""}
              />
            </MDXProvider>
          </CardContainer>
        );
      }}
    ></Carousel>
  );
};

const usePortfolioListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.PortfolioListQuery>(graphql`
    query PortfolioList {
      allMdx(
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
                  fixed(width: 240, height: 240) {
                    base64
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
            body
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return allMdx;
};

const CardContainer = styled.div({
  "& .gatsby-resp-image-wrapper": {
    display: "flex!important",
    maxHeight: "36vh",
    justifyContent: "center",
  },

  "& img": {
    left: "auto!important",
    top: "auto!important",
    width: "auto!important",
    justifySelf: "center",
  },
});

export default Portfolio;
