import React, { useState, useEffect } from "react";

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";
import ContactDetail from "./ContactDetail";
import EditContactHandler from "./EditContact";

function App() {

  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
        <Routes>
          <Route path="/add" element={
              <AddContact />
            } />
          <Route exact path="/" element={
              <ContactList />
            } />
          <Route path="/contact/:id" element={<ContactDetail/>}/>
          <Route path="/edit" element={
              <EditContactHandler />
            } />
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;