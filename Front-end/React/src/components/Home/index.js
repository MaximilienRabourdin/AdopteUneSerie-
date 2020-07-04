/* eslint-disable react/prop-types */
/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
// Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/containers/HeaderSearch';
import LoadingStyled from 'src/components/SerieInfo/LoadingStyled';
import HomeStyled from './HomeStyled';

// Composant

const Home = ({
  loadTrending,
  loadTopRated,
  loadRecent,
  seriesTrending,
  seriesRecent,
  seriesTopRated,
  name,
  serieInput,
  idGenres,
  idNetwork,
  idNote,
  idTime,
}) => {
  if (loadTrending && loadTopRated && loadRecent) {
    // console.log(seriesTrending[0].poster_path);
    return (
      <HomeStyled>
        <Header />
        <div className="search">
          {/* On affiche les séries correspondantes à la recherche faite par l'user */}
          {((idGenres.length || idNetwork.length || idNote.length || idTime.length
            || name.length) > 0)
            && (
            <Card.Group
              style={{
                justifyContent: 'center',
              }}
            >
              {serieInput.map((card) => {
                if (!(card.poster_path === null)) {
                  return (
                    <SerieCard
                      key={card.id}
                      serie={card}
                    />
                  );
                }
              })}
            </Card.Group>
            )}
          {/* Si pas de recherche on affiche les liens vers 3 catégories de séries */}
          {(idGenres.length === 0 && idNetwork.length === 0 && idNote.length === 0
            && idTime.length === 0 && name.length === 0) && (
            <Card.Group
              className="accueil"
              style={{
                justifyContent: 'center',
              }}
            >
              <Link
                to="/Tendances"
                style={{
                  marginBottom: '33px',
                  textAlign: 'center',
                }}
              >
                <Card
                  style={{
                    maxWidth: '90%',
                    margin: '0 5% 5% 5%',
                  }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${seriesTrending[0].poster_path}`}
                    wrapped
                    ui={false}
                  />
                </Card>
                <span className="style">Séries tendances</span>
              </Link>
              <Link
                to="/Mieux-notees"
                style={{
                  marginBottom: '33px',
                  textAlign: 'center',
                }}
              >
                <Card
                  style={{
                    maxWidth: '90%',
                    margin: '0 5% 5% 5%',
                  }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${seriesTopRated[1].poster_path}`}
                    wrapped
                    ui={false}
                  />
                </Card>
                <span className="style">Séries les mieux notées</span>
              </Link>
              <Link
                to="/Recentes"
                style={{
                  marginBottom: '33px',
                  textAlign: 'center',
                }}
              >
                <Card
                  style={{
                    maxWidth: '90%',
                    margin: '0 5% 5% 5%',
                  }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${seriesRecent[0].poster_path}`}
                    wrapped
                    ui={false}
                  />
                </Card>
                <span className="style">Sorties récentes</span>
              </Link>
            </Card.Group>
          )}
        </div>
      </HomeStyled>
    );
  }
  return (
    <div>
      <LoadingStyled>
        <Header />
        <div
          className="head"
        >
          <span className="neonStyle">Loading... </span>
        </div>
      </LoadingStyled>
    </div>
  );
};

Home.propTypes = {
  seriesTrending: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  seriesRecent: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  seriesTopRated: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  idGenres: PropTypes.string.isRequired,
  idNetwork: PropTypes.string.isRequired,
  idNote: PropTypes.string.isRequired,
  idTime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  serieInput: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Home;
