import { FunctionComponent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RecentContext } from "../../contexts/RecentContext.tsx";
import styles from "./Nav.module.css";

const Nav: FunctionComponent = () => {
  const [recentlyViewed, _] = useContext(RecentContext);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const navWidth = isCollapsed ? "auto" : "15em";
  const navButton = isCollapsed ? "+" : "-";

  return (
    <nav className={styles.nav} style={{ width: navWidth }}>
      <button className={styles.button} onClick={handleClick}>
        {navButton}
      </button>
      <ul className={styles.ul}>
        <li>
          <Link to={"/"} className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/pokemon-list"} className={styles.link}>
            Pokemon List
          </Link>
        </li>
      </ul>
      <br />
      {recentlyViewed.length > 0 &&
        (
          <>
            <span>Recently Viewed:</span>
            <ul className={styles.ul} style={{ paddingLeft: ".5em" }}>
              {recentlyViewed.map((pokemon) => (
                <li>
                  <Link to={`/pokemon/${pokemon}`} className={styles.link}>
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
