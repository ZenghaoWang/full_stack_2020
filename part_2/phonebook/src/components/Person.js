import React from "react";

const DeleteButton = ({ onClick }) => {
  return <button onClick={onClick}>delete</button>;
};

const Person = ({ person, onDelete }) => (
  <li>
    {person.name} {person.number} {<DeleteButton onClick={onDelete} />}
  </li>
);

export default Person;
