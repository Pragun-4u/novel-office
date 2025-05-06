import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "80vw",
          margin: "auto",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
