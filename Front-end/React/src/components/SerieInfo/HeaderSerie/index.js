// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
//import { Rating } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import { Divider, Icon, Table} from 'semantic-ui-react'
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

// == Import : local
import './styles.css';

// == Composant
const HeaderSerie = ({
  slug,
  status,
  statusAdd,
  statusDelete,
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
  handleAdd,
  handleDelete
}) => {
  //console.log(status)
  //console.log(statusAdd)
  //console.log(statusDelete)
  const handleClickAdd= (evt) => {
    evt.preventDefault();
    var id = slug.match(/[0-9]+/g)
    handleAdd(id);
  };
  const handleClickDelete= (evt) => {
    evt.preventDefault();
    var id = slug.match(/[0-9]+/g)
    handleDelete(id);
  };


  return (
    <header className="presentation">
      <MediaQuery maxDeviceWidth={425}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt="serie photo"
          className="presentation-image-mobile"
          />
        <div className="presentation-content-mobile">
        {(status === 200)&&
          <h1 className="presentation-title-desktop">{name}
          <HeartFilled onClick={handleClickDelete} style={{transform: "scale(0.7)", color: "red"}} /></h1>
        }
        {(status === 204)&&
          <h1 className="presentation-title-desktop">{name}
          <HeartOutlined onClick={handleClickAdd} style={{transform: "scale(0.7)", color: "red"}} /></h1>
        }
        {(!status)&&
          <h1 className="presentation-title-desktop">{name}</h1>
        }

          <p><Icon color = "yellow" name="star"/> {vote}/10 ({voteCount})</p>
         { /*  <Rating maxRating={10} defaultRating={vote} icon='star' size='small' /> */}
        </div>
        <div className="synopsis-mobile">
        <h3>Synopsis</h3>
        <p>{overview}</p>

        <Divider section />

        <h3>Détails</h3>
        {(airDate.length >0) &&
          <p><span style={{fontWeight: "bold"}}>Date de première diffusion :</span> {airDate} </p>
        }
        {(numberSeasons.length >0) &&
         <p><span style={{fontWeight: "bold"}}>Nombre de saisons :</span> {numberSeasons} </p>
        }
        {(numberEpisodes.length >0) &&
          <p><span style={{fontWeight: "bold"}}>Nombre d'épisodes :</span> {numberEpisodes} </p>
        }
        {(runTime.length >0) &&
          <p><span style={{fontWeight: "bold"}}>Durée moyenne d'un épisode :</span> {runTime.slice(0, 2)} min</p>
        }
        {(networks.length >0) &&
          <p><span style={{fontWeight: "bold"}}>Disponible sur : </span> 
            <ul>
              {networks.map((network) => 
                <li>{network.name}</li>
              )}
            </ul>
          </p>
        }
        {(productions.length >0) &&
          <p><span style={{fontWeight: "bold"}}>Produit par :</span>
            <ul>
              {productions.map((production) => 
                <li>{production.name}</li>
              )}
            </ul>
          </p>
        }

        <Divider section />

        <h3>Saisons</h3>
        <Table celled padded style={{backgroundColor: '#343a40', color: 'white' }}>
          <Table.Body>
            {seasons.map((season) => {
              if (parseInt(season.season_number)>0){
                return (
                  <Table.Row>
                    <Table.Cell singleLine>Saison {season.season_number}</Table.Cell>
                    <Table.Cell singleLine>{season.episode_count} épisodes</Table.Cell>
                  </Table.Row>  
                )
              }
            })}
          </Table.Body>
        </Table> 

        <Divider section />

        <h3>Casting</h3>
        <Table celled padded style={{backgroundColor: '#343a40', color: 'white' }}>
          <Table.Body>
            {cast.map((name =>  
              <Table.Row>
                <Table.Cell singleLine>{name.protagonist}</Table.Cell>
                  {name.actors.map(actor => 
                    <Table.Cell singleLine>{actor.name}</Table.Cell>
                    )}
              </Table.Row>         
            ))}
          </Table.Body>
        </Table>         
      </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={426}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt="serie photo"
          className="presentation-image-desktop"
        />
        <div className="presentation-content-desktop">
        {(status === 200)&&
          <h1 className="presentation-title-desktop">{name}
          <HeartFilled onClick={handleClickDelete} style={{transform: "scale(0.7)", color: "red"}} /></h1>
        }
        {(status === 204)&&
          <h1 className="presentation-title-desktop">{name}
          <HeartOutlined onClick={handleClickAdd} style={{transform: "scale(0.7)", color: "red"}} /></h1>
        }
        {(!status)&&
          <h1 className="presentation-title-desktop">{name}</h1>
        }

          <p><Icon color = "yellow" name="star"/> {vote}/10 ({voteCount})</p>
        { /* <Rating maxRating={10} defaultRating={vote} icon='star' size='huge' /> */}
        </div>
        <div className="synopsis-desktop">
          <h1>Synopsis</h1>
          <p>{overview}</p>

          <Divider section />

          <h1>Détails</h1>
          {(airDate.length >0) &&
            <p><span style={{fontWeight: "bold"}}>Date de première diffusion :</span> {airDate} </p>
          }
          {(numberSeasons.length >0) &&
           <p><span style={{fontWeight: "bold"}}>Nombre de saisons :</span> {numberSeasons} </p>
          }
          {(numberEpisodes.length >0) &&
            <p><span style={{fontWeight: "bold"}}>Nombre d'épisodes :</span> {numberEpisodes} </p>
          }
          {(runTime.length >0) &&
            <p><span style={{fontWeight: "bold"}}>Durée moyenne d'un épisode :</span> {runTime.slice(0, 2)} min</p>
          }
          {(networks.length >0) &&
            <p><span style={{fontWeight: "bold"}}>Disponible sur : </span> 
              <ul>
                {networks.map((network) => 
                  <li>{network.name}</li>
                )}
              </ul>
            </p>
          }
          {(productions.length >0) &&
            <p><span style={{fontWeight: "bold"}}>Produit par :</span>
              <ul>
                {productions.map((production) => 
                  <li>{production.name}</li>
                )}
              </ul>
            </p>
          }

          <Divider section />

          <h1>Saisons</h1>
          <Table celled padded style={{backgroundColor: '#343a40', color: 'white' }}>
            <Table.Body>
              {seasons.map((season) => {
                if (parseInt(season.season_number)>0){
                  return (
                    <Table.Row>
                      <Table.Cell singleLine>Saison {season.season_number}</Table.Cell>
                      <Table.Cell singleLine>{season.episode_count} épisodes</Table.Cell>
                    </Table.Row>  
                  )
                }
              })}
            </Table.Body>
          </Table> 
  
          <Divider section />
  
          <h1>Casting</h1>
          <Table celled padded style={{backgroundColor: '#343a40', color: 'white' }}>
            <Table.Body>
              {cast.map((name =>  
                <Table.Row>
                  <Table.Cell singleLine>{name.protagonist}</Table.Cell>
                    {name.actors.map(actor => 
                      <Table.Cell singleLine>{actor.name}</Table.Cell>
                      )}
                </Table.Row>         
              ))}
            </Table.Body>
          </Table>        
        </div>
      </MediaQuery>
    </header>
  );
};

HeaderSerie.propTypes = {
  slug: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  statusAdd: PropTypes.number.isRequired,
  statusDelete: PropTypes.number.isRequired,
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
  handleAdd: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};


// == Export
export default HeaderSerie;
