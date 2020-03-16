// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image} from 'semantic-ui-react';

// == Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/components/HeaderSearch';
import HomeStyled from './HomeStyled';
import { getUrl } from 'src/selectors/urls';

// == Composant

const Home = ({ name, serieInput, idGenres, idNetwork, idNote, idTime }) => (
  <HomeStyled>
    <Header/>
    <div className="search">
      {((idGenres.length || idNetwork.length || idNote.length || idTime.length || name.length)>0) && (
        <Card.Group itemsPerRow={5} stackable>
          {serieInput.map((card) => {
              return (
            <SerieCard key={card.id} serie={card} />
            )
          })
          }
        </Card.Group>
      )}
      {(idGenres.length=== 0 && idNetwork.length=== 0 && idNote.length=== 0 && idTime.length=== 0 && name.length=== 0) && (
        <Card.Group itemsPerRow={4} stackable id="accueil">
          <Card color='blue'>
            <Image src={"https://image.tmdb.org/t/p/w500/gZ4I2qmGi9i0LavpfmjMaIbIgHv.jpg"} 
            wrapped ui={false} 
            as='a'
            href= {getUrl('/', "Tendances")}
            />
            <Card.Content>
              <Card.Header className="title">
                Séries tendances
              </Card.Header>
            </Card.Content>
          </Card>
          <Card color='blue'>
            <Image src={"https://image.tmdb.org/t/p/w500\/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg"} 
            wrapped ui={false} 
            as='a'
            href= {getUrl('/', "Mieux-notees")}
            />
            <Card.Content>
              <Card.Header className="title">
              Séries les mieux notées
              </Card.Header>
            </Card.Content>
          </Card>
          <Card color='blue'>
            <Image src={"https://image.tmdb.org/t/p/w500\/aiBu2lZ3Ub2dKbZ4vfOfqcPl3YR.jpg"}
            wrapped ui={false} 
            as='a'
            href= {getUrl('/', "Recentes")}
            />
            <Card.Content>
              <Card.Header className="title">
              Sorties récentes
              </Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      )}
    </div>
  </HomeStyled>
);

Home.propTypes = {
  idGenres: PropTypes.string.isRequired,
  idNetwork: PropTypes.string.isRequired,
  idNote: PropTypes.string.isRequired,
  idTime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  serieInput: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

Home.defaultProps = {
  change: false,
};

export default Home;
