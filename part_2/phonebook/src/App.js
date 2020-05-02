import React, { useState, useEffect } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import Form from "./components/Form";
import peopleService from "./services/people";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  // When rendering for the first time, resolve promise from server and set state of phonebook
  useEffect(() => {
    peopleService.getAll().then((initial) => {
      setPersons(initial);
    });
  }, []);

  // Show a notification at the top of the screen for numSeconds
  const showNotification = (msg, numSeconds) => {
    setNotificationMessage(msg);
    setTimeout(() => {
      setNotificationMessage(null);
    }, numSeconds);
  };

  const showWarning = (msg, numSeconds) => {
    setWarningMessage(msg);
    setTimeout(() => {
      setWarningMessage(null);
    }, numSeconds);
  };

  const replacePerson = (person, changedPerson) => {
    peopleService
      .update(person.id, changedPerson)
      .then((returnedPerson) => {
        setPersons(
          persons.map((p) => (p.id !== person.id ? p : returnedPerson))
        );
        showNotification(
          `Successfully changed phone number for ${newName}.`,
          5000
        );
      })
      .catch((error) => {
        showWarning(
          `The entry for ${person.name} was already deleted from the server.`,
          5000
        );
        setPersons(persons.filter((p) => p.id !== person.id));
      });
  };

  // Event handler for clicking submit
  const addPerson = (event) => {
    event.preventDefault();

    // If duplicate name, offer to change phone number
    if (persons.map((person) => person.name).includes(newName)) {
      if (
        window.confirm(
          `${newName} already exists in the phonebook; replace the old number?`
        )
      ) {
        // Replace phone number
        const person = persons.find((p) => p.name === newName);
        const changedPerson = { ...person, number: newNumber };
        replacePerson(person, changedPerson);
      }
    }

    // otherwise, create new person as normal
    else {
      // Create new person
      const personObject = {
        name: newName,
        number: newNumber,
      };

      // Add person to phonebook
      peopleService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
      showNotification(`${newName} was added to the phonebook.`, 5000);
    }
    setNewName("");
    setNewNumber("");
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
      <Notification message={notificationMessage} isWarning={false} />
      <Notification message={warningMessage} isWarning={true} />
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
