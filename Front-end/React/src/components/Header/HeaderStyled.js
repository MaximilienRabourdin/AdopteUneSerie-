import styled from 'styled-components';

export default styled.div`

background-color: #343a40;
height: 100px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
box-shadow:  0px 15px 10px -10px #1A82AE;

.topHeaderMobile {
  position: relative;
  width: 100%;
  padding-top: 15px;
  padding-left : 15px;
}
  .searchBarMobile {
  }

  .bottomHeaderMobile {
    background-color: #343a40;
    height: 50px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px -15px 10px -10px #1A82AE;
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 8px;
  }

  #header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

`;
