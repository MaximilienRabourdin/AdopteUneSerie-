import styled from 'styled-components';

export default styled.div`

background-color: #343a40;
height: 100px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
box-shadow:  10px 15px 10px -10px #1A82AE,
            -10px 15px 10px -10px #1A82AE;

.topMobile {
  position: relative;
  width: 100%;
  padding-top: 10px;
  padding-left : 15px;
}

.bottomMobile {
  position: absolute;
  bottom: 0px;
  background-color: #343a40;
  height: 50px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 10px -15px 10px -10px #1A82AE,
              -10px -15px 10px -10px #1A82AE;
  width: 100%;
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

`;
