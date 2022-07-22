import React from 'react';
import"./App.css";
import Pokedex from './Components/Pokedex/Pokedex';
import {pokemonData} from "./Data/PokemonData";
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from './Types/PokemonSchema';


interface AppState {
searchField: string;
allPokemons:PokemonSchema[];
searchedPokemons:PokemonSchema[];
selectedPokemon:PokemonSchema | undefined;
}

class App extends React.Component <any, AppState> {
  state = {
    searchField:"",
    allPokemons:[],
    searchedPokemons:[],
    selectedPokemon:undefined
}
patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
  const patchedPokemons = pokemons.map((pokemon)=>{
    let parsedSprites: PokemonSpritesSchema = {
      normal: undefined,
      animated: undefined
    };
  try{
    parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
  }catch (e){
    console.log("Exception while parsing the strites:", e)
  }
  const patchedPokemon: PokemonSchema = {
    ...pokemon,
    sprites:parsedSprites
  };
  return patchedPokemon;
  });
  return patchedPokemons;
}
  componentDidMount(){
   //Patch the stringfied pokemon sprites
    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
      pokemonData
    );
    //Update the state with the patched pokemons
    this.setState({
      allPokemons:patchedPokemons,
      searchedPokemons:patchedPokemons,
    })
  }
    render() {
        return (
          
            <div className ='App'>
              <h1>Pokedex</h1>
              <Pokedex/>
            </div>
          )
          
    }
 
}

export default App
