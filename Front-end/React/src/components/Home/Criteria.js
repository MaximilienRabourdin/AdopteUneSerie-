// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

// == Composant
const Criteria = ({ poster_path, name }) => (
  <Card>
    <Image src={"https://image.tmdb.org/t/p/w500" + poster_path} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
  </Card>
);

Criteria.propTypes = {
  poster_path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
// == Export
export default Criteria;
