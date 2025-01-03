import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <p>just scootin' around with Deno + React + Poke API...</p>
    </footer>
  );
};

export default Footer;
