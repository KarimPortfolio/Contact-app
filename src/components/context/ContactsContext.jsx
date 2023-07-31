import React, { useState } from 'react';
import { createContext } from 'react';

export const myContext = createContext();

function ContactsContext(props) {

    const [allContacts , setAllContacts] = useState([
        {id:Math.random()*10 , nom: 'Mohamed Karim Balla', tel: '+212 789 340 456' , ville:'Tanger' , img:''},
        {id:Math.random()*10 , nom: 'Said Ben Salem', tel: '+212 789 350 456' , ville:'Barcelona' , img:''},
        {id:Math.random()*10 , nom: 'Mohamed Jamoun', tel: '+212 789 360 456' , ville:'Tanger' , img:''}
    ]);

    const [contactName , setContactName] = useState('');
    const [contactTel , setContactTel] = useState('');
    const [contactVille , setContactVille] = useState('');
    const [searchVille , setSearchVille] = useState('');

    const [trie , setTrie] = useState(false);
    const [ajout , setAjout] = useState(false);

    const addContact = () => {
        const newContact =  {
            id:Math.random()*10,
            nom: contactName, 
            tel: contactTel ,
            ville:contactVille ,
            img:''
        };
        const newArr = [newContact,...allContacts];
        setAllContacts(newArr);
        setContactName('');
        setContactTel('');
        setContactVille('');
        setAjout(false);
    };

    const deleteContact = id => {
        setAllContacts(allContacts.filter(contact=>contact.id !== id));
    }

    const handleAddContact = () => {
        setAjout(true);
    }

  

  return (
    
    <myContext.Provider value={{allContacts , setAllContacts,contactName,setContactName,contactTel , setContactTel,contactVille , setContactVille ,addContact , deleteContact,searchVille , setSearchVille ,trie , setTrie,ajout , setAjout , handleAddContact}}>
        {props.children}
    </myContext.Provider>

  )
}

export default ContactsContext;