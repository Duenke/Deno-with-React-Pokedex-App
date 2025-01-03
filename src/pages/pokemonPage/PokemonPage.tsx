import { FunctionComponent, useContext, useEffect, useState } from "react";
import { PokeAPI } from "pokeapi-types";
import { useParams } from "react-router-dom";
import { RecentContext } from "../../contexts/RecentContext.tsx";
import {
  Abilities,
  BaseStats,
  Moves,
  RotatingSprite,
  Types,
} from "../../components/index.tsx";
import styles from "./PokemonPage.module.css";

/**
 * All page components must be wrapped in a top level `<main></main>`.
 */
const PokemonPage: FunctionComponent = () => {
  const { name } = useParams();
  const [recentlyViewed, setRecentlyViewed] = useContext(RecentContext);

  const [pokemon, setPokemon] = useState<
    PokeAPI.Pokemon
  >();

  const stats = {
    ...pokemon,
    abilities: undefined,
    base_experience: undefined,
    id: undefined,
    height: undefined,
    weight: undefined,
    sprites: undefined,
    name: undefined,
    cries: undefined,
    forms: undefined,
    game_indices: undefined,
    location_area_encounters: undefined,
    is_default: undefined,
    held_items: undefined,
    moves: undefined,
    order: undefined,
    stats: undefined,
  };

  useEffect(() => {
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response: Response) =>
          response.json()
            .then((json: PokeAPI.Pokemon) => {
              setPokemon(json);
              // @ts-ignore
              const audio = new Audio(json.cries.latest);
              audio.play();
              audio.remove();
            })
        );

      if (!recentlyViewed.has(name)) {
        setRecentlyViewed(new Set(recentlyViewed).add(name));
      }
    }
  }, [name]);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>{name}</h1>
      {pokemon && (
        <>
          <RotatingSprite
            pokemonName={pokemon.name}
            pokemonSprites={pokemon.sprites}
          />
          <div>
            <p>Id: {pokemon.id}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Base Experience: {pokemon.base_experience}</p>
          </div>
          <div className={styles.stats}>
            <Types types={pokemon.types} />
            <Abilities abilities={pokemon.abilities} />
            <BaseStats basestats={pokemon.stats} />
            <Moves moves={pokemon.moves} />
          </div>
        </>
      )}
    </main>
  );
};

export default PokemonPage;
