import React, { useState, useEffect } from "react";
import axios from "axios";
import People from "./components/People";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  // When rendering for the first time, resolve promise from server and set state of phonebook
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  // Event handler for clicking submit
  const addPerson = (event) => {
    event.preventDefault();

    // Don't allow duplicates
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} already exists in the phonebook.`);
      return;
    }

    // Create new person
    const personObject = {
      name: newName,
      number: newNumber,
    };

    // Add person to phonebook
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  // Updates everytime the user types a character
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);

  // Only show people with names that include the current filter
  const peopleToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={newFilter} onChange={handleFilterChange}></Filter>

      <h2>Add a New Entry</h2>
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numValue={newNumber}
        onNumChange={handleNumberChange}
      ></PersonForm>

      <h2>Numbers</h2>
      <People peopleArr={peopleToShow}></People>
    </div>
  );
};

export default App;
