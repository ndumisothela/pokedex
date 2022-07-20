import React from 'react';
import "./Pokedex.css";
import PokedexSearchResult from '../PokeSearchResult/PokedexSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import Pokelist from '../PokeList/Pokelist';

const Pokedex = () => {
  return (
    <div className='pokedex_container'>
      <div className='pokelist_container'>
      
        <SearchBox/>
        <Pokelist/>
      </div>
      <div className='pokedexResults_container'>
    <PokedexSearchResult/>
      </div>
    </div>
  )
}

export default Pokedex;
