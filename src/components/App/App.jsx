import React, { Component } from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import css from "../App/App.module.css";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const saveContactData = localStorage.setItem(
      "saveContactData",
      JSON.stringify(contacts)
    );
    const loadContactData = JSON.parse(localStorage.getItem("saveContactData"));

    // if () {

    // }

    console.log("ok", loadContactData);
  }, [contacts]);

  const handleFilterChange = (e) => {
    e.preventDefault();
    const value = e.target.value.trim().toLowerCase();
    setFilter(value !== "" ? value : "");
  };

  const filtredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter)
    );
  };

  const handleSubmitForm = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    setContacts(() => [...contacts, newContact]);

    actions.resetForm();
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phone book</h1>

      <ContactForm onFormSubmit={handleSubmitForm} />
      <SearchBox onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filtredContacts()}
        onDelete={handleDeleteContact}
      />
    </div>
  );
}

export default App;
