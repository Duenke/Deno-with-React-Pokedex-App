import { FunctionComponent } from "react";
import { PokeAPI } from "pokeapi-types";

type MovesProps = {
  moves: PokeAPI.Pokemon["moves"];
};

const Moves: FunctionComponent<MovesProps> = ({
  moves,
}) => {
  return (
    moves && moves.length > 0 && (
      <div>
        <h3>Moves</h3>
        <ul>
          {moves.map(({ move, version_group_details }) => {
            const level = version_group_details[0].level_learned_at;
            return level
              ? <li key={move.name}>{move.name}{` (lvl ${level})`}</li>
              : null;
          })}
        </ul>
      </div>
    )
  );
};

export default Moves;
