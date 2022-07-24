import React from "react";
import "./PokeCard.css";

interface PokecardProps {
  spriteUrl?: string;
  name: string;
  onPokemonClick: (pokemonName: string) => void;
}
const PokeCard = ({ spriteUrl, name, onPokemonClick }: PokecardProps) => {
  return (
    <div onClick={() => onPokemonClick(name)} className="pokecard">
      {/*TO-DO Add images*/}
      <img className="pokemon_sprite" alt="pokemon_image" src={spriteUrl} />
      <p>{name}</p>
    </div>
  );
};

export default PokeCard;
