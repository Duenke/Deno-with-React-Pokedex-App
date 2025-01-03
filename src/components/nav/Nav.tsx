import { FunctionComponent, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RecentContext } from "../../contexts/RecentContext.tsx";
import styles from "./Nav.module.css";

const Nav: FunctionComponent = () => {
  const { pathname } = useLocation();
  const [recentlyViewed, _] = useContext(RecentContext);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const recentArray: string[] = recentlyViewed.keys().toArray();

  const shrinkNav = isCollapsed ? "collapsed" : "open";
  const navButton = isCollapsed ? "+" : "-";

  return (
    <nav className={`${styles.nav} ${styles[shrinkNav]}`}>
      <button className={styles.button} onClick={handleClick}>
        {navButton}
      </button>
      <ul className={styles.ul}>
        <li>
          <Link
            to={"/"}
            className={`${styles.link} ${pathname === "/" && styles.active}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/pokemon-list"}
            className={`${styles.link} ${
              pathname === "/pokemon-list" && styles.active
            }`}
          >
            Pokemon List
          </Link>
        </li>
      </ul>
      {recentArray.length > 0 &&
        (
          <>
            <div className={styles.divider}></div>
            <span>Recently Viewed</span>
            <ul className={styles.ul} style={{ paddingLeft: ".5em" }}>
              {recentArray.map((pokemon, index) => (
                <li key={index}>
                  <Link
                    to={`/pokemon/${pokemon}`}
                    className={`${styles.link} ${
                      pathname === `/pokemon/${pokemon}` && styles.active
                    }`}
                  >
                    {pokemon}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
    </nav>
  );

  function handleClick(): void {
    setIsCollapsed((old: boolean) => !old);
  }
};

export default Nav;
