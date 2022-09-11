import React, { FC } from "react";
import styled from "@emotion/styled";

const PageLayout: FC<{
  id?: string;
  children: React.ReactNode;
}> = props => {
  return <Section id={props.id}>{props.children}</Section>;
};

const Section = styled.section({
  // backgroundColor: #0f1c2e;
  display: "flex",
  backgroundColor: "#0f1c2e",
  height: "100vh",
  margin: 0,
  paddingTop: "4rem",

  // "&:nth-of-type(2n)": {
  //   backgroundColor: "#ccc",
  // },
});

export default PageLayout;
