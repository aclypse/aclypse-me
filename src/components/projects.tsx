import React, { FC } from "react";
import styled from "@emotion/styled";

import { graphql, Link, useStaticQuery } from "gatsby";

import PageLayout from "./page-layout";

const Projects: FC<{}> = () => {
  const { edges } = useProjectsListQuery();

  return (
    <PageLayout id="projects">
      <Container>
        <Text>
          <h1>Projects</h1>
          <Grid>
            {edges.map(edge => {
              if (!edge.node.fields?.slug || !edge.node.frontmatter?.date) {
                return null;
              }

              return (
                <Link to={edge.node.fields.slug} key={edge.node.fields.slug}>
                  <GridItem>
                    <img src="https://picsum.photos/160/240" alt="" />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Non deserunt vitae sunt, at, nulla nemo nisi temporibus
                      quia adipisci eaque a mollitia ducimus, dolore hic minus
                      praesentium maxime sapiente. Asperiores.
                    </p>
                  </GridItem>
                </Link>
              );
            })}
          </Grid>
        </Text>
      </Container>
    </PageLayout>
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
            slug
            excerpt(pruneLength: 80)
            frontmatter {
              title
              date
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

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
});

const Text = styled.div({
  backgroundColor: "#f9bc3c",
  padding: "50px 100px",
});

const Grid = styled.div({
  display: "flex",
  padding: "0 4px",
});

const GridItem = styled.div({
  // flex: "25%",
  // maxWidth: "25%",
  padding: "4px",

  "& img": {
    marginTop: "8px",
    verticalAlign: "middle",
    // width: "100%",
  },
});

export default Projects;
