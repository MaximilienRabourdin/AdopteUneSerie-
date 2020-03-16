// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
//import { Rating } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import { Divider, Icon } from 'semantic-ui-react'

// == Import : local
import './styles.css';

// == Composant
const HeaderSerie = ({
  name, 
  image, 
  vote, 
  voteCount, 
  overview, 
  airDate,
  numberSeasons, 
  numberEpisodes, 
  runTime, 
  networks, 
  productions,
  seasons,
  cast,
}) => {
  return (
    <header className="presentation">
      <MediaQuery maxDeviceWidth={425}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt="serie photo"
          className="presentation-image-mobile"
          />
        <div className="presentation-content-mobile">
          <h1 className="presentation-title-mobile">{name}</h1>
          <p><Icon color = "yellow" name="star"/> {vote}/10 ({voteCount})</p>
         { /*  <Rating maxRating={10} defaultRating={vote} icon='star' size='small' /> */}
        </div>
        <div className="synopsis-mobile">
        <h3>Synopsis</h3>
        <p>{overview}</p>

        <Divider section />

        <h3>Détails</h3>
        <p><span style={{fontWeight: "bold"}}>Date de première diffusion :</span> {airDate} </p>
        <p><span style={{fontWeight: "bold"}}>Nombre de saisons :</span> {numberSeasons} </p>
        <p><span style={{fontWeight: "bold"}}>Nombre d'épisodes :</span> {numberEpisodes} </p>
        <p><span style={{fontWeight: "bold"}}>Durée moyenne d'un épisode :</span> {runTime} min</p>        
        <p><span style={{fontWeight: "bold"}}>Disponible sur : </span> {networks[0].name}</p>
        <p><span style={{fontWeight: "bold"}}>Produit par :</span>
          <ul>
            {productions.map((production) => 
              <li>{production.name}</li>
            )}
          </ul>
        </p>
      </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={426}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt="serie photo"
          className="presentation-image-desktop"
        />
        <div className="presentation-content-desktop">
          <h1 className="presentation-title-desktop">{name}</h1>
          <p><Icon color = "yellow" name="star"/> {vote}/10 ({voteCount})</p>
        { /* <Rating maxRating={10} defaultRating={vote} icon='star' size='huge' /> */}
        </div>
        <div className="synopsis-desktop">
          <h1>Synopsis</h1>
          <p>{overview}</p>

          <Divider section />

          <h1>Détails</h1>
          <p><span style={{fontWeight: "bold"}}>Date de première diffusion :</span> {airDate} </p>
          <p><span style={{fontWeight: "bold"}}>Nombre de saisons :</span> {numberSeasons} </p>
          <p><span style={{fontWeight: "bold"}}>Nombre d'épisodes :</span> {numberEpisodes} </p>
          <p><span style={{fontWeight: "bold"}}>Durée moyenne d'un épisode :</span> {runTime} min</p>
          <p><span style={{fontWeight: "bold"}}>Disponible sur : </span> {networks[0].name}</p>
          <p><span style={{fontWeight: "bold"}}>Produit par :</span>
            <ul>
              {productions.map((production) => 
                <li>{production.name}</li>
              )}
            </ul>
          </p>

          <Divider section />

          <h1>Saisons</h1>
          {seasons.map((season) => {
            if (parseInt(season.season_number)>0){
              return (
                <p><span style={{fontWeight: "bold"}}>Saison {season.season_number} :</span> {season.episode_count} épisodes</p>
              )
            }
          })}

          <Divider section />

          <h1>Casting</h1>
          <table cellSpacing="1" >
            <thead>
              <tr>
                <th style={{fontWeight: "bold"}}>Rôle</th>
                <th style={{fontWeight: "bold"}}>Acteur</th>
              </tr>
            </thead>
            <tbody>
              {cast.map((name =>
                <tr>
                  <td>{name.protagonist}</td>
                  {name.actors.map(actor =>                    
                    <td>{actor.name}</td>
                    )}
                </tr>            
              ))}
            </tbody>
          </table>          
        </div>
      </MediaQuery>
    </header>
  );
};

HeaderSerie.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  vote: PropTypes.string.isRequired,
  voteCount: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  airDate: PropTypes.string.isRequired,
  numberSeasons: PropTypes.string.isRequired,
  numberEpisodes: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  networks: PropTypes.arrayOf(
    PropTypes.object.isRequired 
  ).isRequired,
  productions: PropTypes.arrayOf(
    PropTypes.object.isRequired 
  ).isRequired,
  seasons: PropTypes.arrayOf(
    PropTypes.object.isRequired 
  ).isRequired,
  cast: PropTypes.arrayOf(
    PropTypes.object.isRequired 
  ).isRequired,
};


// == Export
export default HeaderSerie;
