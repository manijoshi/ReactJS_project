import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList=(props)=>{
    const {contacts,retrieveContacts,text,searchContactHandler,searchResults}= useContactsCrud();
    useEffect(()=>{
        retrieveContacts();
    },[]);
    const onUserSearch=(e)=>{
        searchContactHandler(e.target.value);
    };
    const renderContactList=(text.length<1?contacts:searchResults).map((contact)=>{
        return(
            <ContactCard 
                contact={contact} 
                key={contact.id}
            />
        );
    });
    return(
        <div className="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                    type="text" 
                    placeholder="search Contact" 
                    className="prompt"
                    value={text}
                    onChange={(e)=>onUserSearch(e)}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {
                    renderContactList.length>0?
                    renderContactList:"No data available"
                }
            </div>
        </div>
    );
}
export default ContactList;