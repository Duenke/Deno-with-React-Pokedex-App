import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { Styles } from "../../types/styles.ts";

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
};

const Nav: FunctionComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const navWidth = isCollapsed ? "auto" : "15em";
  const navButton = isCollapsed ? "+" : "-";

  return (
    <nav style={{ ...styles.nav, width: navWidth }}>
      <button style={styles.button} onClick={handleClick}>
        {navButton}
      </button>
      <ul style={styles.ul}>
        <Link to={"/"}>Home</Link>
        <Link to={"/pokemon-list"}>Pokemon List</Link>
      </ul>
    </nav>
  );

  function handleClick(): void {
    setIsCollapsed((old: boolean) => !old);
  }
};

export default Nav;
