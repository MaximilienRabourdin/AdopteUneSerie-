import styled from 'styled-components';

export default styled.div`
color: #1A82AE; 
top: 40px; 
font-family: "Rajdhani", cursive;

@media only screen and (min-width: 1401px){
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

@media only screen and (max-width: 1400px){
  #logo {
    margin:15px 0 0 20px;
    height: 55px;
    width:55px;
  }
  #caption {
    position: absolute;
    top: 80px;
  }
}

@media only screen and (max-width: 375px){
  #logo {
    margin:15px 0 0 8px;
    height: 45px;
    width:45px;
  }
  #caption {
    position: absolute;
    top: 70px;
    font-size: 0.7em;
  }
}

`;
