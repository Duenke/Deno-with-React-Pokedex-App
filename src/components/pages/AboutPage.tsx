import { CSSProperties, FunctionComponent } from "react";

type Styles = { [key: string]: CSSProperties };

const styles: Styles = {
  main: {
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    padding: "4em",
  },
};

/**
 * All page components must be wrapped in a top level `<main></main>`.
 */
const AboutPage: FunctionComponent = () => {
  return (
    <main style={styles.main}>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        neque corporis illum explicabo dolore tempora non esse vitae minima,
        doloribus, quisquam ratione laboriosam perspiciatis. Dolores, doloribus.
        Magnam molestias laboriosam numquam.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        neque corporis illum explicabo dolore tempora non esse vitae minima,
        doloribus, quisquam ratione laboriosam perspiciatis. Dolores, doloribus.
        Magnam molestias laboriosam numquam.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        neque corporis illum explicabo dolore tempora non esse vitae minima,
        doloribus, quisquam ratione laboriosam perspiciatis. Dolores, doloribus.
        Magnam molestias laboriosam numquam.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        neque corporis illum explicabo dolore tempora non esse vitae minima,
        doloribus, quisquam ratione laboriosam perspiciatis. Dolores, doloribus.
        Magnam molestias laboriosam numquam.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        neque corporis illum explicabo dolore tempora non esse vitae minima,
        doloribus, quisquam ratione laboriosam perspiciatis. Dolores, doloribus.
        Magnam molestias laboriosam numquam.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        neque corporis illum explicabo dolore tempora non esse vitae minima,
        doloribus, quisquam ratione laboriosam perspiciatis. Dolores, doloribus.
        Magnam molestias laboriosam numquam.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        neque corporis illum explicabo dolore tempora non esse vitae minima,
        doloribus, quisquam ratione laboriosam perspiciatis. Dolores, doloribus.
        Magnam molestias laboriosam numquam.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        neque corporis illum explicabo dolore tempora non esse vitae minima,
        doloribus, quisquam ratione laboriosam perspiciatis. Dolores, doloribus.
        Magnam molestias laboriosam numquam.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        neque corporis illum explicabo dolore tempora non esse vitae minima,
        doloribus, quisquam ratione laboriosam perspiciatis. Dolores, doloribus.
        Magnam molestias laboriosam numquam.
      </div>
    </main>
  );
};

export default AboutPage;
