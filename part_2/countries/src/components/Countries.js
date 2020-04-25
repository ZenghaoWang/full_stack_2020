import React from "react";

const CountryNamesList = ({ countriesList }) => (
  <ul>
    {countriesList.map((country) => (
      <li key={country.name}>{country.name}</li>
    ))}
  </ul>
);

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
  }

  // Fewer than 10, more than 1
  else if (countriesList.length > 1) {
    return <CountryNamesList countriesList={countriesList} />;
  }

  // 1 or 0 results
  else {
    return (
      <div>
        {countriesList.map((country) => (
          <div key={country.name}>
            <h1>{country.name}</h1>

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
          </div>
        ))}
      </div>
    );
  }
};

export default Countries;
