import React, { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";

import Carousel from "./carousel";

const Portfolio: FC<PropsWithChildren<{}>> = props => {
  const { edges } = usePortfolioListQuery();

  return (
    <Carousel
      id="portfolio"
      title="Portfolio"
      edges={edges}
      render={() => {
        return (
          <CardContainer>
            <MDXProvider
              components={{
                a: props => <>{props.children}</>,
              }}
            >
              {props.children}
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
        sort: { frontmatter: { date: DESC } }
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
