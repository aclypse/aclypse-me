import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "slugify";
import styled from "@emotion/styled";

import LeftPaneContainer from "./left-pane-container";

const TagsList: FC<{}> = () => {
  const { distinct: tags, group } = useTagsListQuery();

  return (
    <LeftPaneContainer title="Tags">
      <Tags>
        {tags.map((tag: string, idx: number) => {
          const slug = `/tags/${slugify(tag).toLocaleLowerCase()}`;
          const articlesCount = group[idx]?.totalCount || 0;
          let amountOfArticles = "There is no articles with this tag yet";

          if (articlesCount > 0) {
            if (articlesCount === 1) {
              amountOfArticles = "1 article";
            } else {
              amountOfArticles = `${articlesCount} articles`;
            }
          }

          return (
            <li key={slug}>
              <Link to={slug}>
                <p>
                  <strong>{tag}</strong>
                </p>
                <p>{amountOfArticles}</p>
              </Link>
            </li>
          );
        })}
      </Tags>
    </LeftPaneContainer>
  );
};

const useTagsListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.TagsListQuery>(graphql`
    query TagsList {
      allMdx(
        sort: { fields: [frontmatter___tags], order: ASC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        distinct(field: frontmatter___tags)
        group(field: frontmatter___tags) {
          totalCount
        }
      }
    }
  `);

  return allMdx;
};

const Tags = styled.ul(() => ({
  "& > li > a": {
    display: "flex",
    flexDirection: "column",
    //color: props.theme.colors.textActiveColor,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
  },
  "& > li > a:hover": {
    //backgroundColor: props.theme.colors.leftPane.backgroundColorHover,
    //color: props.theme.colors.textActiveColor,
    textDecoration: "none",
    cursor: "pointer",
  },

  "& > li > a.active": {
    //backgroundColor: props.theme.colors.leftPane.backgroundColor,
  },

  "& > li > a strong": {
    fontWeight: "bold",
  },

  "& > li > a span": {
    marginLeft: 16,
    fontSize: 11,
    opacity: 0.85,
  },

  "& > li > a > p": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default TagsList;
