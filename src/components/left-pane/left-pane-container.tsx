import React, { FC } from "react";
import styled from "@emotion/styled";

const LeftPaneContainer: FC<{
  title: string;
}> = props => {
  return (
    <Container>
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </Container>
  );
};

const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.4em",
}));

const TitleContainer = styled.div(() => ({
  height: 35,
  paddingLeft: 8,
  paddingRight: 8,
}));

const Title = styled.h3(() => ({
  lineHeight: "35px",
  paddingLeft: 12,
  paddingRight: 12,
  textTransform: "uppercase",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

const ContentContainer = styled.div(() => ({
  height: "100%",
}));

export default LeftPaneContainer;
