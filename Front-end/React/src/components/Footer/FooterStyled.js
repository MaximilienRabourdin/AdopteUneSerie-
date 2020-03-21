// Composant stylisé
import styled from 'styled-components';

// Export du composant
export default styled.div`

#DesktopFooter {
  display: flex;
  flex-direction: row;
  justify-content : space-evenly;
  bottom: 0;
  background-color: #343a40;
  height: 50px;
  width: 100%;
  color: white;
  align-items : center;
  margin-top: 200px;
}

#toggle {
position: absolute;
top: 10px;
right: 20px;
flex-direction: flex-end;
}

#MobileFooter {
  display: flex;
  flex-direction: row;
  justify-content : space-evenly;
  background-color: #343a40;
  padding: 0 2em 5em 2em ;
  height: 40px;
  width: 100%;
  color: white;
  align-items : center;
  font-size: 1em; 
  margin:142px 0 20px; 
}


#toggle {

  position: absolute;
  top: 10px;
  right: 20px;
  flex-direction: flex-end;

}




`;
