import "./PageLayout.css";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";

/**
 * This page layout requires a top level structure like:
 * <div id="layout">
 *  <header> ... </header>
 *  <nav> ... </nav>
 *  <main> ... </main>
 *  <footer> ... </footer>
 * </div>
 */
const PageLayout: FunctionComponent = () => {
  return (
    <div id="layout">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
