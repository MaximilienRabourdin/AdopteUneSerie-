import styled from 'styled-components';

export default styled.div`

#TOP{
  background-color: #343a40;
  height: 100px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow:  10px 15px 10px -10px #1A82AE,
              -10px 15px 10px -10px #1A82AE;
  width: 100%;
  padding-top: 10px;
  position: fixed;
  z-index: 1;
}

.topMobile{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}


.bottomMobile {
  bottom: 0px;
  background-color: #343a40;
  height: 50px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 10px -15px 10px -10px #437B98,
              -10px -15px 10px -10px #437B98;
  width: 100%;
  padding-top: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: fixed;
  z-index: 1;
}

.topDesktop {    
  width: 100%;
  padding: 0 15px 15px 15px;
  background-color: #343a40;
  height: 100px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow:  10px 15px 10px -10px #437B98,
              -10px 15px 10px -10px #437B98;
  position: fixed;
  z-index: 1;
  }
}

#signDesktop {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 30px;
  right: 4%; 
}

.signUpDesktop {
  margin-right: 10px;
}

`;
