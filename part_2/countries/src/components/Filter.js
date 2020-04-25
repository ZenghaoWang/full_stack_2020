import React from "react";

const Filter = ({ value, onChange }) => (
  <div>
    <b>Filter by Name of Country </b>
    <input value={value} onChange={onChange} />
  </div>
);

export default Filter;
