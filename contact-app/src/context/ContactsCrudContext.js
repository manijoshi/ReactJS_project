import { createContext,useContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import api from "../api/contacts";
import { json } from "react-router-dom";
const contactsCrudContext = createContext();
export function ContactsCrudContextProvider({children}){
    const [contacts,setContacts]=useState([]);
    const [contact,setContact]=useState([]);
    const [text,setText] = useState("");
    const retrieveContacts = async () => {
      const response = await api.get("/contacts");
      if (response.data) {
        setContacts(response.data);
      } 
    };
    const removeContactHandler = async (id) => {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });
      setContacts(newContactList);
    };
    const addContactHandler =async (contact) => {
      const request={
        id:uuidv4(),
        ...contact
      };
      const response=await api.post("/contacts",request);
      setContacts([...contacts, response.data]);
      };
    const value = {
      contact,
      contacts,
      retrieveContacts,
      addContactHandler,
      text,
      removeContactHandler
    };
    return <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
}
export function useContactsCrud(){
  return useContext(contactsCrudContext);
}