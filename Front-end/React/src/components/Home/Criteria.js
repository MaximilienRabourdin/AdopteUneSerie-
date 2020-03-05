// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

// == Composant
const Criteria = ({ picture, title }) => (
  <Card>
    <Image src={picture} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
  </Card>
);

Criteria.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
// == Export
export default Criteria;
