import React from 'react'
import { useContext } from 'react';
import {myContext} from './context/ContactsContext';

function TrieBtn() {

    const {trie , setTrie} = useContext(myContext);

  return (
    <div>
        <button class='trierBtn' onClick={() => setTrie(true)}>Trier Contacts</button>
    </div>
  )
}

export default TrieBtn