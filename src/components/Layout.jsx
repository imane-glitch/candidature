import { Outlet } from "react-router-dom";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Layout;
