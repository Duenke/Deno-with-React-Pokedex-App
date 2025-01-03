import { FunctionComponent } from "react";
import { PokeAPI } from "pokeapi-types";

type BaseStatsProps = {
  baseStats: PokeAPI.Pokemon["stats"];
};

const BaseStats: FunctionComponent<BaseStatsProps> = ({
  baseStats,
}) => {
  const statsMap: Record<string, number> = baseStats.reduce(
    (acc: Record<string, number>, { stat, base_stat }) => {
      acc[stat.name] = base_stat;
      return acc;
    },
    {},
  );
  const sortedByLevel = Object.entries(statsMap).sort(([, a], [, b]) => b - a);

  return (
    baseStats && baseStats.length > 0 && (
      <div>
        <h3>BaseStats</h3>
        <ul>
          {sortedByLevel.map(([statName, statValue]) => {
            return <li key={statName}>{statName}{` (${statValue})`}</li>;
          })}
        </ul>
      </div>
    )
  );
};

export default BaseStats;
