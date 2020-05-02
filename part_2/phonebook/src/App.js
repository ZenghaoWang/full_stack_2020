import React, { useState, useEffect } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import Form from "./components/Form";
import peopleService from "./services/people";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  // When rendering for the first time, resolve promise from server and set state of phonebook
  useEffect(() => {
    peopleService.getAll().then((initial) => {
      setPersons(initial);
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
    peopleService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const deletePerson = (person) => {
    if (!window.confirm(`Delete ${person.name}?`)) {
      return;
    }
    peopleService.deletePerson(person.id).then((response) => {
      setPersons(persons.filter((p) => p.id !== person.id));
    });
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
      <Form
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numValue={newNumber}
        onNumChange={handleNumberChange}
      ></Form>

      <h2>Numbers</h2>
      <ul>
        {peopleToShow.map((person) => (
          <Person
            key={person.name}
            person={person}
            onDelete={() => deletePerson(person)}
          ></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
