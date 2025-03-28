import { Outlet } from "react-router-dom";
import React from "react";

import Header from "./Header.jsx";
const Layout = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
