import { FunctionComponent, useContext, useEffect, useState } from "react";
import { PokeAPI } from "pokeapi-types";
import { Link } from "react-router-dom";
import { RecentContext } from "../../contexts/RecentContext.tsx";
import styles from "./PokemonListPage.module.css";

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
    <main className={styles.main}>
      <div className={styles.titleBar}>
        <h1>Pokemon List</h1>
        <h2>Choose Your Pokemon!</h2>
      </div>
      <ul className={styles.list}>
        {pokemonList?.results.map((pokemon) => (
          <li
            key={pokemon.name}
            className={styles.listItem}
          >
            <Link
              to={`/pokemon/${pokemon.name}`}
              className={styles.link}
              onClick={() => handleViewPokemon(pokemon.name)}
            >
              <span>
                {pokemon.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.pageBar}>
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
