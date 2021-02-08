import React, { FC } from "react";

import emotionReset from "emotion-reset";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

import Header from "@components/header";
import Footer from "@components/footer";

const Layout: FC<{}> = props => {
  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Header />
      <div>{props.children}</div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

const globalStyles = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;

export default Layout;
