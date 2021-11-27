import React, { FC } from "react";
import styled from "@emotion/styled";

import { Link } from "gatsby";
import slugify from "slugify";

const ArticleListItem: FC<{
  id: string;
  slug: string;
  title: string;
  date: string;
  timeToRead: string;
  tags?: GatsbyTypes.Maybe<readonly GatsbyTypes.Maybe<string>[]>;
}> = props => {
  return (
    <ArticleItemContainer key={props.id}>
      <Link key={props.slug} to={props.slug}>
        <ArticleItemHeader>
          <h3>{props.title}</h3>
        </ArticleItemHeader>
        <ArticleItemBody>
          {props.tags?.map(tag => (
            <Link
              to={`/tags/${slugify(tag as string).toLocaleLowerCase()}`}
            >{`#${tag}`}</Link>
          ))}
        </ArticleItemBody>
        <ArticleItemFooter>
          <div>
            <span>
              {new Date(props.date).toLocaleDateString()} - {props.timeToRead}
            </span>
          </div>
        </ArticleItemFooter>
      </Link>
    </ArticleItemContainer>
  );
};

const ArticleItemContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "9px 0",
  padding: "12px",
  // backgroundColor: props.theme.colors.main.titleContainerBackgroundColor,

  ":hover": {
    //backgroundColor: props.theme.colors.main.backgroundHoverColor,
  },
}));

const ArticleItemHeader = styled.div(() => ({
  display: "flex",

  "& h3": {
    margin: 0,
    // color: props.theme.colors.textActiveColor,
    opacity: 0.85,
  },

  "& h3:hover": {
    opacity: 1,
  },
}));

const ArticleItemBody = styled.div({
  display: "flex",
  margin: "12px 0",

  "& a": {
    marginRight: 12,
    opacity: 0.85,
  },

  "& a:hover": {
    opacity: 1,
  },
});

const ArticleItemFooter = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: 13,
  //color: props.theme.colors.textActiveColor,
}));

export default ArticleListItem;
