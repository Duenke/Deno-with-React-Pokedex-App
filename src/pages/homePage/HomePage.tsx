import { FunctionComponent } from "react";
import styles from "./HomePage.module.css";

/**
 * All page components must be wrapped in a top level `<main></main>`.
 */
const HomePage: FunctionComponent = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Welcome to my newest Pokedex!</h1>
      <p>
        In this version of the Pokedex App, I want to explore some of the latest
        tech available today.
      </p>
      <p>Tech like:</p>
      <p>Deno for a Node alternative runtime.</p>
      <p>Vite for servering and bundling the code.</p>
      <p>React 18.</p>
      <p>and React-Router v6.</p>
    </main>
  );
};

export default HomePage;
