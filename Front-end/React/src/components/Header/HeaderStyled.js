import styled from 'styled-components';

export default styled.div`

@media only screen and (min-width: 701px){
  #TOP {    
    width: 100%;
    padding: 0 15px 15px 15px;
    background: linear-gradient(0.25turn, #191D1F, black, #191D1F);
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

  #sign {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 30px;
    right: 4%; 
  }

  .Desktop {
    margin-right: 10px;
  }
}

@media only screen and (max-width: 700px){
  #TOP {
    background: linear-gradient(0.25turn, #191D1F, black, #191D1F);
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

  #sign {
    top:unset;
    right: unset;
    bottom: 0px;
    background: linear-gradient(0.25turn, #191D1F, black, #191D1F);
    height: 50px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 10px -15px 10px -10px #437B98,
                -10px -15px 10px -10px #437B98;
    width: 100%;
    padding: 7px 5px 7px 8px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    -webkit-justify-content: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
  }
}

`;
