import React from 'react'
import "./SearchBox.css"

interface searchboxProps{
    onInputChange:(inputValue:string) => void; 
}

const SearchBox = ({onInputChange}: searchboxProps) => {
  return (
  
        <input type= "search" 
             onChange={(e)=>{
             console.log(e.target.value);
             onInputChange(e.target.value);
         }}
         className='search' 
         placeholder="SEARCH POKEMONS"
         
        />
      

  )
}

export default SearchBox
