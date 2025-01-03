import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Nav } from "../../components/index.tsx";
import styles from "./PageLayout.module.css";

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
    <div className={styles.layout}>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
