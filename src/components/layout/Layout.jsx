// Dependencies
import React from "react";

// Components
import MainRouter from "../Routes";
// import Navbar from "../navbar/Navbar";
import Navbar2 from "../navbar/Navbar2";

// Styles
import { LayoutStyle } from "./Layout.Styles";

const Layout = () => {
  return (
    <LayoutStyle>
      {/* <Navbar /> */}
      <Navbar2 />
      <MainRouter />
    </LayoutStyle>
  );
};

export default Layout;
