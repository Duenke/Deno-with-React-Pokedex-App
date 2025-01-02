import { FunctionComponent } from "react";
import { Styles } from "../../types/styles.ts";

const styles: Styles = {
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "1em",
    border: "solid white 1px",
  },
};

const Footer: FunctionComponent = () => {
  return (
    <footer style={styles.footer}>
      <p>just scootin' around with Deno + React + Poke API...</p>
    </footer>
  );
};

export default Footer;
