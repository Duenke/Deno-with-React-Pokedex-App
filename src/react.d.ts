/**
 * Sad hack to get Deno to recognize that "react" contains the code
 * and "@types/react" contains the types.
 */
declare module "react" {
  // @ts-types="@types/react"
  import React from "npm:react@18";
  export = React;
}
