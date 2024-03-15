import { createContext,useContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import api from "../api/contacts";
import { json } from "react-router-dom";
const contactsCrudContext = createContext();
export function ContactsCrudContextProvider({children}){
    const [contacts,setContacts]=useState([]);
    const [contact,setContact]=useState([]);
    const [text,setText] = useState("");
    const retrieveContacts= async ()=>{
      try {
        const response = JSON.parse(localStorage.getItem('contacts'))
        if(response)
        setContacts(response);
      // debugger
        // Process response data
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
      // const response = await api.get("/contacts");
      
    };
    const removeContactHandler = async (id) => {
      // await api.delete(`/contacts/${id}`);
      const storedContacts = JSON.parse(localStorage.getItem('contacts'));
      const updatedContacts = storedContacts.filter((contact)=>contact.id!==id);
      localStorage.setItem('contacts',JSON.stringify(updatedContacts))
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });
      // localStorage.setItem('contacts',JSON.stringify())
      setContacts(newContactList);
    };
    const addContactHandler =async (contact) => {

      try {
        const request={
          id:uuidv4(),
          ...contact
        };
        const currentContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        console.log(currentContacts);
        currentContacts.push(request)
        localStorage.setItem('contacts', JSON.stringify(currentContacts))
        // const response=await api.post("/contacts",request);
        // setContacts([...contacts, response.data]);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
        // const request={
        //   id:uuidv4(),
        //   ...contact
        // };
        // const response=await api.post("/contacts",request);
        // setContacts([...contacts, response.data]);
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