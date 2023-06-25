import React, { FC } from "react";
import styled from "@emotion/styled";

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
            {/* <MDXProvider
              components={{
                a: props => <>{props.children}</>,
              }}
            >
               <MDXRenderer>{node.body}</MDXRenderer>
            </MDXProvider> */}

            {/* <Img
              loading="eager"
              style={{
                width: "160px",
                minWidth: "160px",
                maxWidth: "160px",
              }}
              fixed={
                node!.frontmatter!.featuredImage!.childImageSharp!.fixed as any
              }
              alt={node.frontmatter?.title || ""}
            /> */}

            <img
              src={node!.frontmatter!.featuredImage!.childImageSharp!.fluid.src}
              alt={node.frontmatter?.title || ""}
            />
          </CardContainer>
        );
      }}
    ></Carousel>
  );
};

const usePortfolioListQuery = () => {
  const { allMdx } = useStaticQuery<any>(graphql`
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
                  fixed(width: 160, height: 160) {
                    base64
                    width
                    height
                    src
                    srcSet
                  }
                  fluid {
                    src
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
    maxHeight: "36vh",
    maxWidth: "100%",
  },
});

export default Portfolio;
