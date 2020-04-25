import React from "react";

const Filter = ({ value, onChange }) => (
  <div>
    Filter countries by name: <input value={value} onChange={onChange} />
  </div>
);

export default Filter;
