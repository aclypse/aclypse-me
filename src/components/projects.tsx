import React, { FC } from "react";
import styled from "@emotion/styled";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Carousel from "./carousel";

const Projects: FC<{}> = () => {
  const { edges } = useProjectsListQuery();

  return (
    <Carousel
      id="projects"
      title="Projects"
      edges={edges}
      render={node => {
        return (
          <CardContainer>
            <Img
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
            />

            <Paragraph>
              {node.frontmatter?.description || node.excerpt}
            </Paragraph>
          </CardContainer>
        );
      }}
    ></Carousel>
  );
};

const useProjectsListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.ProjectsListQuery>(graphql`
    query ProjectsList {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { published: { eq: true } }
          fields: { type: { eq: "project" } }
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
                  fixed(width: 160) {
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

  return allMdx;
};

const CardContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Paragraph = styled.p({
  fontSize: "1.2rem",
  fontWeight: "normal",
  paddingRight: "1rem",

  "@media only screen and (max-width: 768px)": {
    paddingRight: "0",
    paddingTop: "1rem",
  },
});

export default Projects;
