import React from 'react';
import PokeCard from "../PokeCard/PokeCard";
import "./Pokelist.css"

const Pokelist = () => {
  return (
    <div className='pokelist'>
        <PokeCard name="Pikachu"/>
        <PokeCard name="Bulbasaur"/>
        <PokeCard name="Ivysaur"/>
        <PokeCard name="Venasaur"/>
        <PokeCard name="Charizard"/>
    
    </div>
  )
}

export default Pokelist
