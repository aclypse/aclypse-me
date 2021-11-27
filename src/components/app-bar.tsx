import React, { FC } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import startsWith from "lodash/startsWith";

import HomeIcon from "../assets/home.svg";
import SettingsIcon from "../assets/settings-gear.svg";

const AppBar: FC<{ location: Location }> = props => {
  const items: TNavItem[] = [
    {
      to: "/",
      title: "Home",
      icon: <HomeIcon />,
    },
  ];

  return (
    <Nav>
      <ul>
        {items.map(item => (
          <NavItem
            location={props.location}
            key={item.to}
            to={item.to}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
      {/* TODO: Think about posibility to move this into one list but position bottom visually - this is good for a11y */}
      <ul>
        <li>
          <a href="/" title="Settings">
            <SettingsIcon />
          </a>
        </li>
      </ul>
    </Nav>
  );
};

const NavItem: FC<TNavItem & { location: Location }> = props => {
  let isActive = props.to === props.location.pathname;
  if (props.to !== props.location.pathname && props.to !== "/")
    isActive = startsWith(props.location.pathname, props.to);

  return (
    <li>
      <div className={isActive ? "active" : undefined}></div>
      <Link
        to={props.to}
        className={isActive ? "active" : undefined}
        title={props.title}
      >
        {props.icon}
      </Link>
    </li>
  );
};

type TNavItem = {
  to: string;
  title: string;
  icon: JSX.Element;
};

const Nav = styled.nav(() => ({
  display: "flex",
  //backgroundColor: props.theme.colors.appBar.backgroundColor,
  flexDirection: "column",
  flexBasis: "48px",
  justifyContent: "space-between",

  "& ul": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  "& li, li > a": {
    width: 48,
    height: 48,
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // color: props.theme.colors.appBar.textColor,
    zIndex: 10,
  },

  "& li > a:hover": {
    // color: props.theme.colors.appBar.textHoverColor,
  },

  "& li": {
    marginBottom: 4,
  },

  "& li > .active": {
    // color: props.theme.colors.appBar.textActiveColor,
  },

  "& li > div.active": {
    position: "absolute",
    left: 0,
    width: 2,
    height: 48,
    borderLeftStyle: "solid",
    borderLeftWidth: 2,
    // borderLeftColor: props.theme.colors.appBar.textActiveColor,
  },
}));

export default AppBar;
