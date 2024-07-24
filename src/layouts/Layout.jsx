import React from "react";
import { NavBar } from "../components";
import { Outlet } from "react-router-dom";

const Layout = ({simple}) => {
  return (
    <div className={!simple && "bg-[#f5f5f5] h-screen"}>
      <NavBar simple={simple}/>
      <Outlet />
    </div>
  );
};

export default Layout;
