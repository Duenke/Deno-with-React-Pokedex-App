import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h1>Deno + React: Pokedex App</h1>
      </Link>
    </header>
  );
};

export default Header;
