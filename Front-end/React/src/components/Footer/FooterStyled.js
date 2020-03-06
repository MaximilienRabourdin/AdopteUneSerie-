// Composant stylisé
import styled from 'styled-components';

// Export du composant
export default styled.div`

#DesktopFooter {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content : space-evenly;
  background-color: #343a40;
  height: 50px;
  width: 100%;
  color: white;
  align-items : center;
}

#toggle {
position: absolute;
top: 10px;
right: 20px;
flex-direction: flex-end;
}

#MobileFooter {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content : space-evenly;
  margin-bottom: 65px;
  background-color: #343a40;
  padding: 2em;
  height: 20px;
  width: 100%;
  color: white;
  align-items : center;
  font-size: 1em;  
}


#toggle {

  position: absolute;
  top: 10px;
  right: 20px;
  flex-direction: flex-end;

}




`;
