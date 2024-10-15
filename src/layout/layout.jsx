import React from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import "../components/style.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-auto">
        <Topbar />
        <div className="p-5 overflow-auto max-h-[90vh] content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
