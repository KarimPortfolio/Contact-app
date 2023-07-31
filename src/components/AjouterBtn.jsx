import React, { useContext, useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { myContext } from './context/ContactsContext'

function AjouterBtn() {

    const {handleAddContact} = useContext(myContext);

  return (
    <div>
        <button className='ajouterBtn' onClick={handleAddContact}> <BsPlusLg style={{marginRight:'10px'}} /> Add contact</button>
    </div>
  )
}

export default AjouterBtn