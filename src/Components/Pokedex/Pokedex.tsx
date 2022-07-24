import React from "react";
import "./Pokedex.css";
import PokedexSearchResult from "../PokeSearchResult/PokedexSearchResult";
import SearchBox from "../SearchBox/SearchBox";
import Pokelist from "../PokeList/Pokelist";
import { PokemonSchema } from "../../Types/PokemonSchema";

interface PokedexProps {
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
  onInputChange: (inputValue: string) => void;
  onPokemonClick: (pokemonName: string) => void;
}

const Pokedex = ({
  searchedPokemons,
  onInputChange,
  selectedPokemon,
  onPokemonClick,
}: PokedexProps) => {
  return (
    <div className="pokedex_container">
      <div className="pokelist_container">
        <SearchBox onInputChange={onInputChange} />
        <Pokelist
          searchedPokemons={searchedPokemons}
          onPokemonClick={onPokemonClick}
        />
      </div>
      <div className="pokedexResults_container">
        <PokedexSearchResult selectedPokemon={selectedPokemon} />
      </div>
    </div>
  );
};

export default Pokedex;
