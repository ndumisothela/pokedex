import "./PokedexSearchResult.css";
import React from "react";
import { PokemonSchema } from "../../Types/PokemonSchema";

interface PokedexSearchResultProps {
  selectedPokemon: PokemonSchema | undefined;
}
const PokedexSearchResult = ({ selectedPokemon }: PokedexSearchResultProps) => {
  const { name, id, height, weight, base_experience, sprites } =
    selectedPokemon || {};

  return (
    <div className="poke_result_card">
      {selectedPokemon ? (
        <div>
          <img
            className="pokemon_animated_sprite"
            src={sprites?.animated || sprites?.normal}
            alt="pokemon"
          />
          <p>name:{name}</p>
          <p>Id: {id} </p>
          <p>Height:{height} </p>
          <p>weight:{weight} </p>
          <p>Base exp:{base_experience} </p>
        </div>
      ) : (
        <h2>Welcome to the Pokedex</h2>
      )}
    </div>
  );
};

export default PokedexSearchResult;
