import { FunctionComponent, useContext, useEffect, useState } from "react";
import { PokeAPI } from "pokeapi-types";
import { Styles } from "../types/Styles.ts";
import { Link } from "react-router-dom";
import { RecentContext } from "../contexts/RecentContext.tsx";

const styles: Styles = {
  main: {
    display: "grid",
    gridTemplateRows: "50px 1fr 50px",
    overflow: "auto",
  },
  titleBar: {
    placeContent: "center",
    paddingInline: "1em",
    border: "solid white 1px",
  },
  list: {
    listStyleType: "none",
    textDecoration: "none",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: "4px",
  },
  listItem: {
    fontSize: "2em",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  pageBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2em",
    border: "solid white 1px",
  },
};

/**
 * All page components must be wrapped in a top level `<main></main>`.
 */
const PokemonListPage: FunctionComponent = () => {
  const [_, setRecentlyViewed] = useContext(RecentContext);

  const [listUrl, setListUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon",
  );
  const [pokemonList, setPokemonList] = useState<
    PokeAPI.NamedAPIResourceList
  >();
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const totalPokemon = pokemonList?.count || 0;
  const lastPage = Math.ceil(totalPokemon / 20);

  useEffect(() => {
    fetch(listUrl)
      .then((response: Response) =>
        response.json()
          .then((json: PokeAPI.NamedAPIResourceList) => setPokemonList(json))
      );
  }, [listUrl]);

  return (
    <main style={styles.main}>
      <div style={styles.titleBar}>
        <h1>Pokemon List</h1>
        <h2>Choose Your Pokemon!</h2>
      </div>
      <ul style={styles.list}>
        {pokemonList?.results.map((pokemon) => (
          <li
            key={pokemon.name}
            style={styles.listItem}
          >
            <Link
              to={`/pokemon/${pokemon.name}`}
              style={styles.link}
              onClick={() => handleViewPokemon(pokemon.name)}
            >
              <span
                onMouseOver={(e) => e.currentTarget.style["color"] = "gray"}
                onMouseOut={(e) => e.currentTarget.style["color"] = "unset"}
              >
                {pokemon.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div style={styles.pageBar}>
        <button
          onClick={() => {
            setSelectedPage((old) => old - 1);
            setListUrl(pokemonList?.previous || "");
          }}
          disabled={!pokemonList?.previous}
        >
          👈
        </button>
        <span>page {selectedPage} of {lastPage}</span>
        <button
          onClick={() => {
            setSelectedPage((old) => old + 1);
            setListUrl(pokemonList?.next || "");
          }}
          disabled={!pokemonList?.next}
        >
          👉
        </button>
      </div>
    </main>
  );

  function handleViewPokemon(pokemon: string): void {
    setRecentlyViewed((old) => old.includes(pokemon) ? old : [...old, pokemon]);
  }
};

export default PokemonListPage;
