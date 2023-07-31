import React from 'react'
import { useContext } from 'react';
import {myContext} from './context/ContactsContext';
import {BiSearchAlt2 } from 'react-icons/bi';

function Search() {

    const {searchVille , setSearchVille} = useContext(myContext);

  return (
    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        <input className='search_input' type="search" placeholder='Search by city' onChange={e=>{setSearchVille(e.target.value)}} />
        <button disabled className='search_icon'> <BiSearchAlt2 /> </button>
    </div>
  )
}

export default Search