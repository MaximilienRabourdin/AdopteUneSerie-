import styled from 'styled-components';

export default styled.div`
#topMobileHeader {
  position: relative;
  background-color: #343a40;
  padding: 2em;
  height: 100px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow:  0px 15px 10px -10px gray;
}
  #bottomMobileHeader {
    background-color: #343a40;
    height: 50px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px -15px 10px -10px gray;
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
`;
