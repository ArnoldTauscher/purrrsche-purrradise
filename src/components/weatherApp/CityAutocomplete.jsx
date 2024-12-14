import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { loadCities } from '../../actions/weatherActions';
import PropTypes from 'prop-types';

export const CityAutocomplete = ({ onSelectCity }) => {
  const dispatch = useDispatch();
  const { citiesOptions, citiesLoading, citiesError } = useSelector(state => state.weather);

  const handleInputChange = (inputValue, { action }) => {
    if (action === 'input-change') {
      dispatch(loadCities(inputValue));
    }
    return inputValue;
  };

  return (
    <div>
      <Select
        options={citiesOptions}
        onInputChange={handleInputChange}
        onChange={(selectedOption) => onSelectCity(selectedOption.city)}
        placeholder="Stadt eingeben..."
        className="react-select-container"
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: 'greenyellow',
            primary: 'white',
          },
        })}
        isLoading={citiesLoading} // Ladezustand anzeigen
        noOptionsMessage={() => citiesError ? "Fehler beim Laden der Städte" : "Keine Optionen gefunden"} // Fehlermeldung anzeigen
      />
      {citiesLoading && <p>Lädt Städte...</p>}
      {citiesError && <p style={{ color: 'red' }}>{citiesError}</p>}
    </div>
  );
};

CityAutocomplete.propTypes = {
  onSelectCity: PropTypes.func.isRequired,
};