/* eslint-disable react/prop-types */
// Import : npm
import React from 'react';
// import { Rating } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import { Divider, Icon, Table } from 'semantic-ui-react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

// Import : local
import './styles.css';

// Composant
const HeaderSerie = ({
  slug,
  status,
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
  handleDelete,
}) => {
  // console.log(status)
  const handleClickAdd = (evt) => {
    evt.preventDefault();
    const id = slug.match(/[0-9]+/g);
    handleAdd(id);
  };
  const handleClickDelete = (evt) => {
    evt.preventDefault();
    const id = slug.match(/[0-9]+/g);
    handleDelete(id);
  };

  return (
    <header className="presentation">
      <MediaQuery maxWidth={425}>
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt="serie"
          className="presentation-image-mobile"
        />
        <div className="presentation-content-mobile">
          {/* Série déjà présente dans les favoris */}
          {(status === 200)
          && (
          <h1 className="presentation-title-mobile">{name}
            <HeartFilled
              onClick={handleClickDelete}
              style={{
                transform: 'scale(0.7)',
                color: 'red',
              }}
            />
          </h1>
          )}
          {/* Série non présente dans les favoris */}
          {(status === 204)
          && (
          <h1 className="presentation-title-mobile">{name}
            <HeartOutlined
              onClick={handleClickAdd}
              style={{
                transform: 'scale(0.7)',
                color: 'red',
              }}
            />
          </h1>
          )}
          {(!status)
          && <h1 className="presentation-title-mobile">{name}</h1>}

          <p><Icon color="yellow" name="star" /> {vote}/10 ({voteCount})</p>
          { /*  <Rating maxRating={10} defaultRating={vote} icon='star' size='small' /> */}
        </div>
        <div className="synopsis-mobile">
          <h3>Synopsis</h3>
          <p>{overview}</p>

          <Divider section />

          <h3>Détails</h3>
          {(airDate.length > 0)
          && <p><span style={{ fontWeight: 'bold' }}>Date de première diffusion :</span> {airDate} </p>}
          {(numberSeasons.length > 0)
         && <p><span style={{ fontWeight: 'bold' }}>Nombre de saisons :</span> {numberSeasons} </p>}
          {(numberEpisodes.length > 0)
          && <p><span style={{ fontWeight: 'bold' }}>Nombre d'épisodes :</span> {numberEpisodes} </p>}
          {(runTime.length > 0)
          && <p><span style={{ fontWeight: 'bold' }}>Durée moyenne d'un épisode :</span> {runTime.slice(0, 2)} min</p>}
          {(networks.length > 0)
          && (
          <p><span style={{ fontWeight: 'bold' }}>Disponible sur : </span>
            <span>
              {networks.map((network) => <li key={network.name}>{network.name}</li>)}
            </span>
          </p>
          )}
          {(productions.length > 0)
          && (
          <p><span style={{ fontWeight: 'bold' }}>Produit par :</span>
            <span>
              {productions.map((production) => <li key={production.name}>{production.name}</li>)}
            </span>
          </p>
          )}

          <Divider section />

          <h3>Saisons</h3>
          <Table
            celled
            padded
            style={{
              backgroundColor: '#191D1F',
              color: 'white',
            }}
          >
            <Table.Body>
              {seasons.map((season) => {
                if (parseInt(season.season_number) > 0) {
                  return (
                    <Table.Row key={season.season_number}>
                      <Table.Cell singleLine>Saison {season.season_number}</Table.Cell>
                      <Table.Cell singleLine>{season.episode_count} épisodes</Table.Cell>
                    </Table.Row>
                  );
                }
              })}
            </Table.Body>
          </Table>

          <Divider section />

          <h3>Casting</h3>
          <Table
            celled
            padded
            style={{
              backgroundColor: '#191D1F',
              color: 'white',
            }}
          >
            <Table.Body>
              {cast.map(((infos) => (
                <Table.Row key={infos}>
                  <Table.Cell singleLine>{infos.protagonist}</Table.Cell>
                  {infos.actors.map((actor) => <Table.Cell singleLine>{actor.name}</Table.Cell>)}
                </Table.Row>
              )
              ))}
            </Table.Body>
          </Table>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={426}>
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt="serie"
          className="presentation-image-desktop"
        />
        <div className="presentation-content-desktop">
          {/* Série déjà présente dans les favoris */}
          {(status === 200)
          && (
          <h1 className="presentation-title-desktop">{name}
            <HeartFilled
              onClick={handleClickDelete}
              style={{
                transform: 'scale(0.7)',
                color: 'red',
              }}
            />
          </h1>
          )}
          {/* Série non présente dans les favoris */}
          {(status === 204)
          && (
          <h1 className="presentation-title-desktop">{name}
            <HeartOutlined
              onClick={handleClickAdd}
              style={{
                transform: 'scale(0.7)',
                color: 'red',
              }}
            />
          </h1>
          )}
          {(!status)
          && <h1 className="presentation-title-desktop">{name}</h1>}

          <p><Icon color="yellow" name="star" /> {vote}/10 ({voteCount})</p>
          { /* <Rating maxRating={10} defaultRating={vote} icon='star' size='huge' /> */}
        </div>
        <div className="synopsis-desktop">
          <h1>Synopsis</h1>
          <p>{overview}</p>

          <Divider section />

          <h1>Détails</h1>
          {(airDate.length > 0)
            && <p><span style={{ fontWeight: 'bold' }}>Date de première diffusion :</span> {airDate} </p>}
          {(numberSeasons.length > 0)
           && <p><span style={{ fontWeight: 'bold' }}>Nombre de saisons :</span> {numberSeasons} </p>}
          {(numberEpisodes.length > 0)
            && <p><span style={{ fontWeight: 'bold' }}>Nombre d'épisodes :</span> {numberEpisodes} </p>}
          {(runTime.length > 0)
            && <p><span style={{ fontWeight: 'bold' }}>Durée moyenne d'un épisode :</span> {runTime.slice(0, 2)} min</p>}
          {(networks.length > 0)
            && (
            <p><span style={{ fontWeight: 'bold' }}>Disponible sur : </span>
              <span>
                {networks.map((network) => <li key={network.name}>{network.name}</li>)}
              </span>
            </p>
            )}
          {(productions.length > 0)
            && (
            <p><span style={{ fontWeight: 'bold' }}>Produit par :</span>
              <span>
                {productions.map((production) => <li key={production.name}>{production.name}</li>)}
              </span>
            </p>
            )}

          <Divider section />

          <h1>Saisons</h1>
          <Table celled padded style={{ backgroundColor: '#191D1F', color: 'white' }}>
            <Table.Body>
              {seasons.map((season) => {
                if (parseInt(season.season_number) > 0) {
                  return (
                    <Table.Row key={season.season_number}>
                      <Table.Cell singleLine>Saison {season.season_number}</Table.Cell>
                      <Table.Cell singleLine>{season.episode_count} épisodes</Table.Cell>
                    </Table.Row>
                  );
                }
              })}
            </Table.Body>
          </Table>

          <Divider section />

          <h1>Casting</h1>
          <Table celled padded style={{ backgroundColor: '#191D1F', color: 'white' }}>
            <Table.Body>
              {cast.map(((infos) => (
                <Table.Row key={infos}>
                  <Table.Cell singleLine>{infos.protagonist}</Table.Cell>
                  {infos.actors.map((actor) => <Table.Cell singleLine>{actor.name}</Table.Cell>)}
                </Table.Row>
              )
              ))}
            </Table.Body>
          </Table>
        </div>
      </MediaQuery>
    </header>
  );
};

// Export
export default HeaderSerie;
