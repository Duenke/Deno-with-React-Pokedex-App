import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Styles } from "../../types/Styles.ts";

const styles: Styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "1em",
    border: "solid white 1px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
};

const Header: FunctionComponent = () => {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.link}>
        <h1>Deno + React: Pokedex App</h1>
      </Link>
    </header>
  );
};

export default Header;
