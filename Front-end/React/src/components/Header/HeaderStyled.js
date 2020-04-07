import styled from 'styled-components';

export default styled.div`
#TOP{
background-color: #343a40;
height: 100px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
box-shadow:  10px 15px 10px -10px #1A82AE,
            -10px 15px 10px -10px #1A82AE;
position: fixed;
z-index: 1;
left: 0;
right: 0;
}

.topMobile {
  position: relative;
  width: 100%;
  padding-top: 36px;
  padding-left : 170px;
  top: 0;
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
  padding: 7px 5px 7px 8px;
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
  top: 0;
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
