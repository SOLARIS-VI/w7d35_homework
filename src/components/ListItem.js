import React from 'react';

const ListItem = ({ country, onCountryClicked }) => {
  const handleClick = function () {
    console.log(`Clicked on ${country.name.common}`);
    onCountryClicked(country);
  };

  return <option onClick={handleClick}>{country.name.common}{country.flag}</option>;
};

export default ListItem;
