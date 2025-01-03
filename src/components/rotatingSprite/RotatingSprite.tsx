import { FunctionComponent, useEffect, useState } from "react";
import { PokeAPI } from "pokeapi-types";
import styles from "./RotatingSprite.module.css";

type RotatingSpriteProps = {
  pokemonName: string;
  pokemonSprites: PokeAPI.PokemonSprites;
};

const RotatingSprite: FunctionComponent<RotatingSpriteProps> = ({
  pokemonName,
  pokemonSprites,
}) => {
  const sortedSprites = [
    pokemonSprites.front_default,
    pokemonSprites.back_default,
    pokemonSprites.front_shiny,
    pokemonSprites.back_shiny,
    pokemonSprites.front_female,
    pokemonSprites.back_female,
    pokemonSprites.front_shiny_female,
    pokemonSprites.back_shiny_female,
  ].filter((s) => !!s);

  const [currentSpriteIndex, setCurrentSpriteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpriteIndex((prevIndex) =>
        (prevIndex + 1) % sortedSprites.length
      );
    }, 1000 * 2.5); // Change sprite every 2.5 seconds
    return () => clearInterval(interval);
  }, [sortedSprites.length]);

  return (
    <div className={styles.pix}>
      {sortedSprites.map((sprite, index) => (
        <picture
          key={index}
          className={styles.sprite}
          style={{ opacity: index === currentSpriteIndex ? 1 : 0 }}
        >
          <source srcSet={sprite as string} media="(min-width: 800px)" />
          <img
            src={sprite as string}
            alt={`${pokemonName} sprite ${index}`}
          />
        </picture>
      ))}
    </div>
  );
};

export default RotatingSprite;
