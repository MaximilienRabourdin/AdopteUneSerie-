// Composant stylisé
import styled from 'styled-components';

// Export du composant
export default styled.div`

@media only screen and (max-width: 700px){
  .Footer {
    display: flex;
    flex-direction: row;
    justify-content : space-evenly;
    background-color: #191D1F;
    padding: 0 2em 5em 2em ;
    height: 40px;
    width: 100%;
    color: white;
    align-items : center;
    font-size: 1em; 
    margin:142px 0 20px; 
  }
}

@media only screen and (min-width: 701px){
  .Footer {
    display: flex;
    flex-direction: row;
    justify-content : space-evenly;
    bottom: 0;
    background-color: #191D1F;
    height: 50px;
    width: 100%;
    color: white;
    align-items : center;
    margin-top: 200px;
  }
}

`;
