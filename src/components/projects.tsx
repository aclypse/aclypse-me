import React, { FC } from "react";
import styled from "@emotion/styled";
import PageLayout from "./page-layout";

const Projects: FC<{}> = () => {
  return (
    <PageLayout id="projects">
      <Container>
        <Text>
          <h1>Projects</h1>
          <Grid>
            <GridItem>
              <img src="https://picsum.photos/160/240" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                deserunt vitae sunt, at, nulla nemo nisi temporibus quia
                adipisci eaque a mollitia ducimus, dolore hic minus praesentium
                maxime sapiente. Asperiores.
              </p>
            </GridItem>
            <GridItem>
              <img src="https://picsum.photos/160/240" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                deserunt vitae sunt, at, nulla nemo nisi temporibus quia
                adipisci eaque a mollitia ducimus, dolore hic minus praesentium
                maxime sapiente. Asperiores.
              </p>
            </GridItem>
            <GridItem>
              <img src="https://picsum.photos/160/240" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                deserunt vitae sunt, at, nulla nemo nisi temporibus quia
                adipisci eaque a mollitia ducimus, dolore hic minus praesentium
                maxime sapiente. Asperiores.
              </p>
            </GridItem>
            <GridItem>
              <img src="https://picsum.photos/160/240" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                deserunt vitae sunt, at, nulla nemo nisi temporibus quia
                adipisci eaque a mollitia ducimus, dolore hic minus praesentium
                maxime sapiente. Asperiores.
              </p>
            </GridItem>
            <GridItem>
              <img src="https://picsum.photos/160/240" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                deserunt vitae sunt, at, nulla nemo nisi temporibus quia
                adipisci eaque a mollitia ducimus, dolore hic minus praesentium
                maxime sapiente. Asperiores.
              </p>
            </GridItem>
            <GridItem>
              <img src="https://picsum.photos/160/240" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                deserunt vitae sunt, at, nulla nemo nisi temporibus quia
                adipisci eaque a mollitia ducimus, dolore hic minus praesentium
                maxime sapiente. Asperiores.
              </p>
            </GridItem>
            <GridItem>
              <img src="https://picsum.photos/160/240" alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                deserunt vitae sunt, at, nulla nemo nisi temporibus quia
                adipisci eaque a mollitia ducimus, dolore hic minus praesentium
                maxime sapiente. Asperiores.
              </p>
            </GridItem>
          </Grid>
        </Text>
      </Container>
    </PageLayout>
  );
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
