import { FunctionComponent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Styles } from "../../types/Styles.ts";
import { RecentContext } from "../../contexts/RecentContext.tsx";

const styles: Styles = {
  nav: {
    border: "solid white 1px",
    padding: "1em",
  },
  button: { width: "2em", marginBottom: "4px" },
  ul: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    listStyle: "none",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
};

const Nav: FunctionComponent = () => {
  const [recentlyViewed, _] = useContext(RecentContext);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const navWidth = isCollapsed ? "auto" : "15em";
  const navButton = isCollapsed ? "+" : "-";

  return (
    <nav style={{ ...styles.nav, width: navWidth }}>
      <button style={styles.button} onClick={handleClick}>
        {navButton}
      </button>
      <ul style={styles.ul}>
        <li>
          <Link to={"/"} style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/pokemon-list"} style={styles.link}>
            Pokemon List
          </Link>
        </li>
      </ul>
      <br />
      {recentlyViewed.length > 0 &&
        (
          <>
            <span>Recently Viewed:</span>
            <ul style={{ ...styles.ul, paddingLeft: ".5em" }}>
              {recentlyViewed.map((pokemon) => (
                <li>
                  <Link to={`/pokemon/${pokemon}`} style={styles.link}>
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
