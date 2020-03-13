// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import FieldStyled from './FieldStyled';

// == Composant
const Field = ({
  value,
  onChange,
  placeholder,
  name,
  type,
}) => {
  const handleChange = (evt) => {
    console.log(evt.target.value);
    onChange(evt.target.value, name);
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
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};

Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
