import React from 'react';
import AjouterContact from './AjouterContact';
import Contacts from './Contacts';
import ContactsContext from './context/ContactsContext';
import '../css/main.css'
import AjouterBtn from './AjouterBtn';

function Children() {
  return (
    <div className='children'>
        <ContactsContext>
             <AjouterContact />
             <Contacts />
        </ContactsContext>
    </div>
  )
}

export default Children