import React, { FC } from "react";

import { graphql, useStaticQuery } from "gatsby";

import Carousel from "./carousel";

const Projects: FC<{}> = () => {
  const { edges } = useProjectsListQuery();

  return <Carousel id="projects" title="Projects" edges={edges} />;
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

export default Projects;
