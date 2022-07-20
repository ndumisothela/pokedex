import "./PokedexSearchResult.css";
import React from "react";


const PokedexSearchResult = () => {
  const   selectedPokemon = true;


  return (
    <div className='poke_result_card'>
      {selectedPokemon ? (
            <div>
                {/*Add the image here */}
                <p>Name:Pikachu</p>
                <p>Id: Some Id </p>
                <p>Height:some height </p>
                <p>weight:some weight </p>
                <p>Base exp:100 </p>
            </div>

        ):(
            <h2>Welcome to the Pokedex</h2>
        )
      }
    </div>
  )
}

export default PokedexSearchResult;
