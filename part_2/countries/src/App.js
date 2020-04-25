import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);

  // When rendering for the first time, resolve promise from server and set state of phonebook
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const [filter, setFilter] = useState("");

  // Updates everytime the user types a character
  const handleFilterChange = (event) => setFilter(event.target.value);

  // Only show people with names that include the current filter
  const countriesToShow = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Filter value={filter} onChange={handleFilterChange}></Filter>
      <Countries countriesList={countriesToShow}></Countries>
    </div>
  );
};

export default App;
