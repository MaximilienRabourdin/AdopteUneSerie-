import styled from 'styled-components';

export default styled.div`
min-height: 100vh;
h1{
  font-family: "Rajdhani", cursive;
}
h3{
  font-family: "Rajdhani", cursive;
}

@media only screen and (min-width: 426px){
  .presentation-image {
      background-repeat : no-repeat;
      background-position: center;
      width: 30%;
      color: white;
      padding: 2em;
      position: fixed;
      top: 100px;
  }
  .presentation-content {

    margin: 128px 30px 0 30%;
    width: 68%;
    height: 100px;
    position: fixed;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    border-bottom: solid 1px #1A82AE;
    padding-top: 8px;
  }
  .presentation-title{
    font-size: 2.5em;
    text-transform: uppercase;
    color: black;
    animation: neons 3s ease infinite ;
    -moz-animation: neons 3s ease infinite;
    -webkit-animation: neons 3s ease infinite;
  }
  .presentation-content p{
    font-size: 1.5em;
    color: #FBBD08;
  }
  .synopsis td{
  padding: 20px;
  text-align: left;
  }

  .synopsis {
    padding: 250px 0 10px 30%;
    color: white;
    width: 97%;
    font-size: 1.5em;
  }
  .synopsis h3{
    color: orange;
    font-size: 1.7em;
  }
}

@media only screen and (max-width: 425px){
  .presentation-image {
    margin: 110px 0 0 0;
    background-repeat : no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 40%;
    color: white;
    padding: 0 25px;
  }
  .presentation-content {
    padding: 5px 0;
    margin: 5px 25px;
    text-align: center;
    background: rgba(0,0,0,0.3);
    border-bottom: solid 1px #1A82AE;
    padding-top: 8px;
  }
  .presentation-title {
    text-transform: uppercase;
    font-size: 1.5em;
    color: black;
    animation: neons 3s ease infinite;
    -moz-animation: neons 3s ease infinite;
    -webkit-animation: neons 3s ease infinite;
  }
  .presentation-content p{
    font-size: 1em;
    color:  #FBBD08;
  }
  .synopsis {
    color:white;
    margin: 10px 25px 80px 25px;
    font-size: 0.9em;
  }
  .synopsis h3{
    color: #FB4264;
  }
}
@keyframes neons {
  0%,
  100% {
    text-shadow: 
    0 0 1vw #FA1C16, 
    0 0 3vw #FA1C16, 
    0 0 10vw #FA1C16, 
    0 0 10vw #FA1C16, 
    0 0 .4vw #FED128, 
    .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    text-shadow: 
    0 0 .5vw #800E0B, 
    0 0 1.5vw #800E0B, 
    0 0 5vw #800E0B, 
    0 0 5vw #800E0B, 
    0 0 .2vw #800E0B, 
    .5vw .5vw .1vw #40340A;
    color: #806914;
  }
}


`;
