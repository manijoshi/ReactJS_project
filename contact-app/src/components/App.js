import React, { useState, useEffect } from "react";

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
        <Routes>
          <Route path="/add" element={
              <AddContact />
            } />
          <Route exact path="/contacts" element={
              <ContactList />
            } />
          <Route path="/contact/:id" element={<ContactDetail/>}/>
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;