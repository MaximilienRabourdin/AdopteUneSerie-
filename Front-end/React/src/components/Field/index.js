
import React from 'react';

// == Import
import FieldStyled from './FieldStyled';

// == Composant
const Field = () => (
  <FieldStyled>
    <label
      className="label"
      htmlFor="field">
      un champ
    </label>
    <input
      className="input"
      type="text"
      id="field"
    />
  </FieldStyled>
);

// == Export
export default Field;
