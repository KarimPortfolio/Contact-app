import React, { useState } from 'react'
import { useContext } from 'react';
import {myContext} from './context/ContactsContext';
import {BiTrash} from 'react-icons/bi';
import Search from './Search';
import TrieBtn from './trierBtn';
import AjouterBtn from './AjouterBtn';
import AjouterContact from './AjouterContact';


function Contacts() {

    const {allContacts , setAllContacts} = useContext(myContext);
    const {searchVille , setSearchVille} = useContext(myContext);
    const {trie , setTrie} = useContext(myContext);
    const {ajout , setAjout} = useContext(myContext);
    const {deleteContact} = useContext(myContext);

  return (
     
       <div style={ajout ? {display:'none',position:'relative'} : {display:'block' , position:'relative'}}>
        <h1 className='show_contacts_title'>All Contacts</h1>
         <Search />
         <br />
         <div className='Btn_parent'>
             <TrieBtn />
             <AjouterBtn />
         </div>
         {
            trie ? (
                    <ul style={{listStyle:'none',padding:'0px' , position:'relative' , overflowY:'scroll' , height:'454px'}} className="contactList">
                        {allContacts.sort((a,b) => {
                            if (a.nom.toLowerCase() < b.nom.toLowerCase()){return -1};
                            if (a.nom.toLowerCase() > b.nom.toLowerCase()){return 1};
                            return 0;
                        }).filter( (value) => {
                            if (searchVille == '') {
                                return value;
                            } else if (value.ville.toLowerCase().includes(searchVille.toLowerCase())) {
                                return value;
                            }
                        }).map(
                            contact => {
                                return(
                                    <li key={contact.id}>
                                        <ul className="allContacts">
                                              <li  className='deleteBtn_parent'>
                                                    <button className='deleteBtn' onClick={() => {deleteContact(contact.id)}}><BiTrash /></button>
                                              </li>
                                              <li style={{display:'flex' , justifyContent:'center'}}> <p><span style={{color:'#1b90fd' , fontWeight:600}}>Name:</span>  {contact.nom}   </p></li>
                                              <li style={{display:'flex' , justifyContent:'center'}}> <p><span style={{color:'#1b90fd' , fontWeight:600}}>Phone:</span>  {contact.tel}  </p> </li>
                                              <li style={{display:'flex' , justifyContent:'center'}}> <p><span style={{color:'#1b90fd' , fontWeight:600}}>City:</span>  {contact.ville} </p> </li>
                                        </ul>
                                     </li>
                                )
                            }
                        )}
                    </ul>
             ) : (
                         <ul style={{listStyle:'none',padding:'0px' , position:'relative' , overflowY:'scroll' , height:'454px'}} className="contactList">
                         {allContacts.filter( value => {
                             if (searchVille == '') {
                                 return value;
                             } else if (value.ville.toLowerCase().includes(searchVille.toLowerCase())) {
                                 return value;
                             }
                         } ).map(
                             contact => {
                                 return(
                                     <li key={contact.id}>
                                         <ul className="allContacts">
                                              <li  className='deleteBtn_parent'>
                                                    <button className='deleteBtn' onClick={() => {deleteContact(contact.id)}}><BiTrash /></button>
                                              </li>
                                              <li style={{display:'flex' , justifyContent:'center'}}> <p><span style={{color:'#1b90fd' , fontWeight:600}}>Name:</span>  {contact.nom}   </p></li>
                                              <li style={{display:'flex' , justifyContent:'center'}}> <p><span style={{color:'#1b90fd' , fontWeight:600}}>Phone:</span>  {contact.tel}  </p> </li>
                                              <li style={{display:'flex' , justifyContent:'center'}}> <p><span style={{color:'#1b90fd' , fontWeight:600}}>City:</span>  {contact.ville} </p> </li>
                                         </ul>
                                     </li>
                                 )
                             }
                         )}
                     </ul>
             )
         }
      </div>

  )
}

export default Contacts