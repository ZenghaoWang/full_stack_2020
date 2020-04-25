import React, { useState } from "react";

const Country = ({ country }) => {
  const [expanded, setExpanded] = useState(false);

  // If not expanded, just show name of country
  // Has a button to expand
  if (!expanded) {
    return (
      <li>
        {country.name}
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "hide" : "show"}
        </button>
      </li>
    );
  }

  // Otherwise, show all details of country
  else
    return (
      <li>
        <h1>
          {country.name}
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "hide" : "show"}
          </button>
        </h1>

        <p>
          <b>Capital: </b>
          {country.capital}
        </p>

        <p>
          <b>Population: </b>
          {country.population}
        </p>

        <h2>Languages</h2>
        <LanguagesList country={country} />

        <Flag country={country} />
      </li>
    );
};

const LanguagesList = ({ country }) => (
  <ul>
    {country.languages.map((language) => (
      <li key={language.name}>{language.name}</li>
    ))}
  </ul>
);

const Flag = ({ country }) => (
  <img src={country.flag} alt={`The flag of ${country.name}`} />
);

const Countries = ({ countriesList }) => {
  // Too many results
  if (countriesList.length > 10) {
    return <div>Too many potential matches</div>;
  } else {
    return (
      <div>
        {countriesList.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </div>
    );
  }
};

export default Countries;
