import { FunctionComponent } from "react";
import { PokeAPI } from "pokeapi-types";

type MovesProps = {
  moves: PokeAPI.Pokemon["moves"];
};

const Moves: FunctionComponent<MovesProps> = ({
  moves,
}) => {
  const movesMap: Record<string, number> = moves.reduce(
    (acc: Record<string, number>, { move, version_group_details }) => {
      const level = version_group_details[0].level_learned_at;
      if (level) {
        acc[move.name] = level;
      }
      return acc;
    },
    {},
  );
  const sortedByLevel = Object.entries(movesMap).sort(([, a], [, b]) => a - b);

  return (
    moves && moves.length > 0 && (
      <div>
        <h3>Moves</h3>
        <ul>
          {sortedByLevel.map(([moveName, moveLevel]) => {
            return <li key={moveName}>{moveName}{` (lvl ${moveLevel})`}</li>;
          })}
        </ul>
      </div>
    )
  );
};

export default Moves;
