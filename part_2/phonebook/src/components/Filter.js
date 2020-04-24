import React from "react";

const Filter = ({ value, onChange }) => (
  <div>
    filter by name: <input value={value} onChange={onChange} />
  </div>
);

export default Filter;
