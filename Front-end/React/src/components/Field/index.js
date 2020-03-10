// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import FieldStyled from './FieldStyled';

// == Composant
const Field = ({
  value,
  changeValue,
  placeholder,
  name,
  type,
}) => {
  const handleChange = (evt) => {
    // console.log(evt.target.value);
    changeValue(evt.target.name, evt.target.value);
  };

  return (
    <FieldStyled>
      <label
        className="label"
        htmlFor={name}
      >
        {placeholder}
      </label>
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </FieldStyled>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  changeValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};


// == Export
export default Field;
