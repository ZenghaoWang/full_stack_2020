import React from "react";

const Person = ({ person }) => (
  <li>
    {person.name} {person.number}
  </li>
);

const People = ({ peopleArr }) => (
  <ul>
    {peopleArr.map((person) => (
      <Person key={person.name} person={person}></Person>
    ))}
  </ul>
);

export default People;
