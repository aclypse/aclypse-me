import React, { FC } from "react";
import styled from "@emotion/styled";

import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navigation: FC<{ location?: Location }> = () => {
  const onAnchorClick = (to: string) => {
    if (to) {
      location.replace(to);
    }
  };

  return (
    <Nav>
      <ul>
        <li>
          <AnchorLink to="/#about" onAnchorLinkClick={onAnchorClick}>
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#projects" onAnchorLinkClick={onAnchorClick}>
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#portfolio" onAnchorLinkClick={onAnchorClick}>
            Portfolio
          </AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#contact" onAnchorLinkClick={onAnchorClick}>
            Contacts
          </AnchorLink>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav(() => ({
  ul: {
    display: "flex",
    margin: 0,
    padding: 0,
    listStyle: "none",
  },

  "ul > li": {
    padding: "4px 12px",
  },
}));

// const NavItem: FC<TNavItem & { location: Location }> = props => {
//   let isActive = props.to === props.location.pathname;
//   if (props.to !== props.location.pathname && props.to !== "/")
//     isActive = startsWith(props.location.pathname, props.to);

//   return (
//     <li>
//       <div className={isActive ? "active" : undefined}></div>
//       <Link
//         to={props.to}
//         className={isActive ? "active" : undefined}
//         title={props.title}
//       >
//         {props.icon}
//       </Link>
//     </li>
//   );
// };

export default Navigation;
