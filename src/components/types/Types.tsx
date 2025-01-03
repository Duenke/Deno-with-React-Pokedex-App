import { FunctionComponent } from "react";
import { PokeAPI } from "pokeapi-types";

type TypesProps = {
  types: PokeAPI.Pokemon["types"];
};

const Types: FunctionComponent<TypesProps> = ({
  types,
}) => {
  return (
    types && types.length > 0 && (
      <div>
        <h3>Types</h3>
        <ul>
          {types.map(({ type }) => <li key={type.name}>{type.name}</li>)}
        </ul>
      </div>
    )
  );
};

export default Types;
