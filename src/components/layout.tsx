import React, { FC } from "react";

import Header from "@components/header";
import Footer from "@components/footer";
import Navigation from "./navigation";

const Layout: FC<{}> = props => {
  return (
    <div>
      <Header />
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
