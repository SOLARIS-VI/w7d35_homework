import React, { useState, useEffect } from 'react';
import CountrySelect from '../components/CountrySelect';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [totalPopulation, setTotalPopulation] = useState(0); // New state for total population

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    calculateTotalPopulation();
  }, [countries]); // Update total population whenever countries change

  const getCountries = function () {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        const countryData = Object.values(data);
        setCountries(countryData);
      });
  };

  const onCountrySelected = function (selectedOption) {
    const selectedCountryData = countries.find(
      (country) => country.name.common === selectedOption.value
    );
    setSelectedCountry(selectedCountryData);
  };

  const calculateTotalPopulation = () => {
    const totalPop = countries.reduce((total, country) => {
      if (country.population) {
        return total + country.population;
      }
      return total;
    }, 0);
    setTotalPopulation(totalPop);
  };

  return (
    <div className="main-container">
      <CountrySelect countries={countries} onCountrySelected={onCountrySelected} />
      {selectedCountry && <CountryDetail country={selectedCountry} />}
      <div className="total-population">Total Population: {totalPopulation}</div>
    </div>
  );
};

export default CountryContainer;
