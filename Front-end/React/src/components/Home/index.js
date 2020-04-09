// == Import npm
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';

// == Import
import SerieCard from 'src/containers/SerieCard';
import Header from 'src/containers/HeaderSearch';
import HomeStyled from './HomeStyled';

// == Composant

const Home = ({ name, serieInput, idGenres, idNetwork, idNote, idTime }) => (
  <HomeStyled>
       <Header/>
       <div className="search">
         {((idGenres.length || idNetwork.length || idNote.length || idTime.length || name.length)>0) && (
           <Card.Group style={{justifyContent: 'center'}}>
             {serieInput.map((card) => {
              if(!(card.poster_path === null)){
                 return (
               <SerieCard key={card.id} serie={card} />
               )}
             })
             }
           </Card.Group>
         )}
         {(idGenres.length=== 0 && idNetwork.length=== 0 && idNote.length=== 0 && idTime.length=== 0 && name.length=== 0) && (
           <Card.Group className="accueil" style={{justifyContent: 'center'}}>
             <Link to="/Tendances" style={{marginBottom: '33px', textAlign: 'center'}}>
                <Card style={{maxWidth: '90%', margin:'0 5% 5% 5%'}}>
                  <Image src={"https://image.tmdb.org/t/p/w500/gZ4I2qmGi9i0LavpfmjMaIbIgHv.jpg"} 
                  wrapped ui={false} 
                  />
                </Card>
                <span className="style">Séries tendances</span>
             </Link>
             <Link to="/Mieux-notees" style={{marginBottom: '33px', textAlign: 'center'}}>
                <Card style={{maxWidth: '90%', margin:'0 5% 5% 5%'}}>
                  <Image src={"https://image.tmdb.org/t/p/w500\/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg"} 
                  />
                </Card>
                <span className="style">Séries les mieux notées</span> 
             </Link>
             <Link to="/Recentes" style={{marginBottom: '33px', textAlign: 'center'}}>
                <Card style={{maxWidth: '90%', margin:'0 5% 5% 5%'}}>
                  <Image src={"https://image.tmdb.org/t/p/w500\/aiBu2lZ3Ub2dKbZ4vfOfqcPl3YR.jpg"}
                  wrapped ui={false} 
                  />   
                </Card>
                <span className="style">Sorties récentes</span>
             </Link>
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
