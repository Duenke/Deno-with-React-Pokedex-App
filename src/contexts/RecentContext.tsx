import { createContext, Dispatch, SetStateAction } from "react";

/**
 * Context containing a list of names of recently viewed pokemon.
 */
export const RecentContext = createContext<
  [string[], Dispatch<SetStateAction<string[]>>]
>(null!);
