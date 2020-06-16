import styled from 'styled-components';

export default styled.div`
color: #1A82AE;
font-family: "Rajdhani", cursive;

@media only screen and (min-width: 701px){
  #logo {
    position: absolute;
    top: 8px; 
    left: 170px;
    height: 65px;
    width:65px;
  }
  #caption {
    position: absolute;
    top: 72px; 
    left:157px;
  }
}

@media only screen and (max-width: 700px){
  #logo {
    position: absolute;
    top: 8px; 
    left: 45%;
    right: 45%;
    height: 65px;
    width:65px;
  }
  #caption {
    position: absolute;
    top: 72px; 
    left: 43%;
  }
}
`;
