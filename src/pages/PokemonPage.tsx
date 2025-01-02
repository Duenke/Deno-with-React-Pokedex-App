import { FunctionComponent, useEffect, useState } from "react";
import { PokeAPI } from "pokeapi-types";
import { Styles } from "../types/Styles.ts";
import { useParams } from "react-router-dom";

const styles: Styles = {
  main: {
    paddingInline: "1em",
    border: "solid white 1px",
  },
  h1: {
    fontSize: "3em",
    paddingBottom: "10px",
    marginInline: "auto",
  },
  pix: {
    display: "flex",
  },
};

/**
 * All page components must be wrapped in a top level `<main></main>`.
 */
const PokemonPage: FunctionComponent = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<
    PokeAPI.Pokemon
  >();

  const sortedMales = [
    pokemon?.sprites.front_default,
    pokemon?.sprites.back_default,
    pokemon?.sprites.front_shiny,
    pokemon?.sprites.back_shiny,
  ].filter((s) => !!s);

  const sortedFemales = [
    pokemon?.sprites.front_female,
    pokemon?.sprites.back_female,
    pokemon?.sprites.front_shiny_female,
    pokemon?.sprites.back_shiny_female,
  ].filter((s) => !!s);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response: Response) =>
        response.json()
          .then((json: PokeAPI.Pokemon) => setPokemon(json))
      );
  }, [name]);

  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>{name}</h1>
      {pokemon && (
        <>
          <div style={styles.pix}>
            {sortedMales
              .map((sprite, index) => (
                <picture key={index}>
                  <source
                    srcSet={sprite as string}
                    media="(min-width: 800px)"
                  />
                  <img src={sprite as string} alt={`${name} sprite ${index}`} />
                </picture>
              ))}
          </div>
          <div style={styles.pix}>
            {sortedFemales
              .map((sprite, index) => (
                <picture key={index}>
                  <source
                    srcSet={sprite as string}
                    media="(min-width: 800px)"
                  />
                  <img src={sprite as string} alt={`${name} sprite ${index}`} />
                </picture>
              ))}
          </div>
          <div>
            <p>Id: {pokemon.id}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Base Experience: {pokemon.base_experience}</p>
          </div>
        </>
      )}
    </main>
  );
};

export default PokemonPage;
