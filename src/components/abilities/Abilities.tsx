import { FunctionComponent } from "react";
import { PokeAPI } from "pokeapi-types";

type AbilitiesProps = {
  abilities: PokeAPI.Pokemon["abilities"];
};

const Abilities: FunctionComponent<AbilitiesProps> = ({
  abilities,
}) => {
  return (
    abilities && abilities.length > 0 && (
      <div>
        <h3>Abilities</h3>
        <ul>
          {abilities.map(({ ability, is_hidden }) => (
            <li key={ability.name}>{ability.name}{is_hidden && " (hidden)"}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Abilities;
