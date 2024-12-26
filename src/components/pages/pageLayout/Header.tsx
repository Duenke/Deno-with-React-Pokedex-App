import { CSSProperties, FunctionComponent } from "react";

type Styles = { [key: string]: CSSProperties };

const styles: Styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    border: "solid white 1px",
  },
};

const Header: FunctionComponent = () => {
  return (
    <header style={styles.header}>
      <h1>header</h1>
      <h1>header</h1>
      <h1>header</h1>
    </header>
  );
};

export default Header;
