import { CSSProperties, FunctionComponent } from "react";
import Counter from "../components/Counter.tsx";

type Styles = { [key: string]: CSSProperties };

const styles: Styles = {
  main: {
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    border: "solid white 1px",
  },
};

/**
 * All page components must be wrapped in a top level `<main></main>`.
 */
const HomePage: FunctionComponent = () => {
  return (
    <main style={styles.main}>
      <Counter />
    </main>
  );
};

export default HomePage;
