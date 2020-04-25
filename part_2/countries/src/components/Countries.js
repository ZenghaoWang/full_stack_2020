import React, { useState, useEffect } from "react";
import axios from "axios";

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

const Weather = ({ country }) => {
  const [weather, setWeather] = useState({
    location: { name: "" },
    current: {
      temperature: "",
      weather_icons: "",
      wind_speed: "",
      wind_dir: "",
    },
  });

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`
      )
      .then((response) => {
        console.log("response");

        setWeather(response.data);
      });
  }, [country.capital]);

  return (
    <div>
      <h2>{`Weather in ${weather.location.name}`}</h2>

      <p>
        <b>Temperature: </b>
        {`${weather.current.temperature} degrees celsius`}
      </p>

      <img
        src={weather.current.weather_icons[0]}
        alt={`Weather icon for ${weather.location.name}`}
      />

      <p>
        <b>Wind: </b>
        {`${weather.current.wind_speed} km/h ${weather.current.wind_dir}`}
      </p>
    </div>
  );
};

const ExpandedCountry = ({ country }) => {
  return (
    <li>
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
      <Weather country={country} />
    </li>
  );
};

const Country = ({ country, hideButton }) => {
  const [expanded, setExpanded] = useState(false);

  if (hideButton) {
    return <ExpandedCountry country={country} />;
  }
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
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "hide" : "show"}
        </button>

        <ExpandedCountry country={country} />
      </li>
    );
};

const Countries = ({ countriesList }) => {
  // Too many results
  if (countriesList.length > 10) {
    return <div>Too many potential matches</div>;
  } else {
    return (
      <div>
        {countriesList.map((country) => (
          <Country
            key={country.name}
            country={country}
            hideButton={countriesList.length === 1}
          />
        ))}
      </div>
    );
  }
};

export default Countries;
