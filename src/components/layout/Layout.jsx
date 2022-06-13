// Dependencies
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MainRouter />
    </LayoutStyle>
  );
};

export default Layout;
