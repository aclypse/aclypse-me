import React, { FC } from "react";
import styled from "@emotion/styled";

import { MDXRenderer } from "gatsby-plugin-mdx";
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
              <MDXRenderer>{node.body}</MDXRenderer>
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
