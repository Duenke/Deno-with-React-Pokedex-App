import { FunctionComponent } from "react";
import { PokeAPI } from "pokeapi-types";

type BaseStatsProps = {
  basestats: PokeAPI.Pokemon["stats"];
};

const BaseStats: FunctionComponent<BaseStatsProps> = ({
  basestats,
}) => {
  return (
    basestats && basestats.length > 0 && (
      <div>
        <h3>BaseStats</h3>
        <ul>
          {basestats.map(({ stat, base_stat }) => {
            return <li key={stat.name}>{stat.name}{` (${base_stat})`}</li>;
          })}
        </ul>
      </div>
    )
  );
};

export default BaseStats;
