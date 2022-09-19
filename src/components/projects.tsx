import React, { FC } from "react";
import styled from "@emotion/styled";

import { graphql, Link, useStaticQuery } from "gatsby";

import PageLayout from "./page-layout";

const Projects: FC<{}> = () => {
  const { edges } = useProjectsListQuery();

  return (
    <PageLayout id="projects">
      <Container>
        <Wrapper>
          <Header>Projects</Header>
          <Grid>
            {edges.map(({ node }) => {
              if (!node.fields?.slug || !node.frontmatter?.date) {
                return null;
              }

              return (
                <Card>
                  <Link to={node.fields.slug} key={node.fields.slug}>
                    <CardHeader>{node.frontmatter.title}</CardHeader>
                    <CardBody>
                      <Paragraph>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Non deserunt vitae sunt, at, nulla nemo nisi
                        temporibus quia adipisci eaque a mollitia ducimus,
                        dolore hic minus praesentium maxime sapiente.
                        Asperiores.
                      </Paragraph>
                      <img src="https://picsum.photos/160/160" alt="" />
                    </CardBody>
                  </Link>
                </Card>
              );
            })}
          </Grid>
        </Wrapper>
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
});

const CardBody = styled.h3({
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

const Card = styled.div({
  display: "flex",
  flexDirection: "row",
  flex: "25%",
  padding: "1.8rem 1.8rem",

  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.5s ease-in-out",
    boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.5)",
    backgroundColor: "#f9bc3c",
  },

  "& a": {
    color: "#0f1c2e",
  },

  "& img": {
    width: "33%",
    minWidth: "33%",
    height: "33%",
    minHeight: "33%",
    maxWidth: "33%",
    maxHeight: "33%",
  },
});

export default Projects;
