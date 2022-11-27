import React, { FC } from "react";

import { graphql, useStaticQuery } from "gatsby";

import CarouselPortfolio from "./carousel-portfolio";

const Portfolio: FC<{}> = () => {
  const { edges } = usePortfolioListQuery();

  return <CarouselPortfolio id="portfolio" title="Portfolio" edges={edges} />;
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

export default Portfolio;
