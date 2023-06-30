import React from 'react';
import Select from 'react-select';

const CountrySelect = ({ countries, onCountrySelected }) => {
  const handleSelect = (selectedOption) => {
    onCountrySelected(selectedOption);
  };

  const countryOptions = countries.map((country) => ({
    value: country.name.common,
    label: (
      <div>
        <img src={country.flags.png} alt={country.name.common} style={{ marginRight: '8px' }} />
        {country.name.common}
      </div>
    ),
  }));

  const dropdownStyles = {
    control: (provided) => ({
      ...provided,
      width: 500, // Adjust the width as desired
    }),
  };

  return (
    <Select
      options={countryOptions}
      onChange={handleSelect}
      placeholder="Select a country"
      styles={dropdownStyles}
    />
  );
};

export default CountrySelect;
