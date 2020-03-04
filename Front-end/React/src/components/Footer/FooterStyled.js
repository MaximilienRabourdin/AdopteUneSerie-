// Composant stylisé
import styled from 'styled-components';

// Export du composant
export default styled.div`
  position: absolute;
  display: flex;
  justify-content : space-between;
  bottom: 5px;
  padding: 5px 10px;
  height: 40px;
  width: 100%;
  border-top: solid 1px black;

  #text {
    padding: 0 5px;
    display: flex;
    flex-direction: row;
    justify-content : space-between;
  }

  #buttons{
    display: flex;
    flex-direction: row;
    justify-content : space-between;
  }

`;
