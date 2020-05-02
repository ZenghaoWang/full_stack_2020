import React from "react";
const PersonForm = ({
  onSubmit,
  nameValue,
  onNameChange,
  numValue,
  onNumChange,
}) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={nameValue} onChange={onNameChange} />
    </div>
    <div>
      number: <input value={numValue} onChange={onNumChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
