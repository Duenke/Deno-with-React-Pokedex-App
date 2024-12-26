import { FunctionComponent } from "react";
import "./PageLayout.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";
import { Outlet } from "react-router-dom";

/**
 * This page layout requires a top level structure like:
 * <div id="root">
 *  <header> ... </header>
 *  <nav> ... </nav>
 *  <main> ... </main>
 *  <footer> ... </footer>
 * </div>
 */
const PageLayout: FunctionComponent = () => {
  return (
    // This fragment represents the #root for the purposes of CSS.
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
