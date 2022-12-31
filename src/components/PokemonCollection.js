import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const dispPokemon = pokemon.map((item) => <PokemonCard key={item.id} item={item}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {dispPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
