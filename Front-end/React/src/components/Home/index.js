/* eslint-disable react/jsx-fragments */
// == Import npm
import _ from 'lodash';
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Card, Image, Placeholder } from 'semantic-ui-react';

// == Import
import note from 'src/images/note.jpg';
import tendance from 'src/images/tendance.jpg';
import news from 'src/images/new.jpg';

import HomeStyled from './HomeStyled';

const cards = [
  {
    avatar: note,
    header: 'Séries les mieux notées ',
  },
  {
    avatar: tendance,
    header: 'Tendances',
  },
  {
    avatar: news,
    header: 'Sortie récentes',
  },
];

// == Composant

export default class PlaceholderExampleCard extends Component {
  state = { loading: false }

  handleLoadingClick = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    const { loading } = this.state;
    return (
      <HomeStyled>
        <Fragment>
          <Card.Group doubling itemsPerRow={3} stackable>
            {_.map(cards, (card) => (
              <Card key={card.header}>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Image square />
                  </Placeholder>
                ) : (
                  <Image style={{}} src={card.avatar} />
                )}
                <Card.Content>
                  {loading ? (
                    <Placeholder>
                      <Placeholder.Header>
                        <Placeholder.Line length="very short" />
                        <Placeholder.Line length="medium" />
                      </Placeholder.Header>
                      <Placeholder.Paragraph>
                        <Placeholder.Line length="short" />
                      </Placeholder.Paragraph>
                    </Placeholder>
                  ) : (
                    <Fragment>
                      <Card.Header>{card.header}</Card.Header>
                      <Card.Meta>{card.date}</Card.Meta>
                      <Card.Description>{card.description}</Card.Description>
                    </Fragment>
                  )}
                </Card.Content>

                <Card.Content extra>
                  <Button disabled={loading} primary>
                    Voir plus
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Fragment>
      </HomeStyled>
    );
  }
}
