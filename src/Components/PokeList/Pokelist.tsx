import React from 'react';
import { PokemonSchema } from '../../Types/PokemonSchema';
import PokeCard from "../PokeCard/PokeCard";
import "./Pokelist.css"

interface PokelistProps{
  searchedPokemons: PokemonSchema[];
}
const Pokelist = ({ searchedPokemons }: PokelistProps) => {

  return (
    <div className='pokelist'>
      {searchedPokemons.map((pokemon)=>{
          return(
            pokemon.name && (
            < PokeCard 
            key={pokemon.id}
             name={pokemon.name}
             spriteUrl={pokemon.sprites.normal} 
             />
          )
          );
        })
      }
    
    </div>
  )
}

export default Pokelist;
