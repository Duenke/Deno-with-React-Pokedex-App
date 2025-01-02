import { CSSProperties, FunctionComponent } from "react";

type Styles = { [key: string]: CSSProperties };

const styles: Styles = {
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    border: "solid white 1px",
  },
};

const Footer: FunctionComponent = () => {
  return (
    <footer style={styles.footer}>
      <h1>footer</h1>
      <h1>footer</h1>
      <h1>footer</h1>
    </footer>
  );
};

export default Footer;
