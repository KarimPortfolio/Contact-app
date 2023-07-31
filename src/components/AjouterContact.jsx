import React from 'react'
import { useContext } from 'react';
import {myContext} from './context/ContactsContext';

function AjouterContact() {

    const {contactName , setContactName} = useContext(myContext);
    const {contactTel , setContactTel} = useContext(myContext);
    const {contactVille , setContactVille} = useContext(myContext);
    const {ajout , setAjout} = useContext(myContext);
    const {addContact} = useContext(myContext);
    

  return (
    <div className='ajouterContact' style={ajout ? {display:'block'} : {display:'none'} }>
         <h1 className='ajouterTitle'>Ajouter Contact</h1>

         <input className='ajouterInputs' placeholder='Your name' type="text" value={contactName}  onChange={e=>{setContactName(e.target.value)}} />
         <br /><br />
         <input className='ajouterInputs' placeholder='Your phone' type="text" value={contactTel}  onChange={e=>{setContactTel(e.target.value)}} />
         <br /><br />
         <input className='ajouterInputs' placeholder='Your city' type="text" value={contactVille}  onChange={e=>{setContactVille(e.target.value)}} />
         <br /><br />
         <button  onClick={addContact}>Ajouter Contact</button>
         
    </div>
  )
}

export default AjouterContact