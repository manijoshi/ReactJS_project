import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList=(props)=>{
    const {contacts,retrieveContacts,text}= useContactsCrud();
    useEffect(()=>{
        retrieveContacts();
    },[]);
    const renderContactList=(text.length<1?contacts:"").map((contact)=>{
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