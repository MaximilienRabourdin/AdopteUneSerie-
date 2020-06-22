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
    animation: neon .08s ease-in-out infinite alternate;
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
    color: #1A82AE;
    font-size: 1.7em;
  }
}
@keyframes neon {
  from {
    text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(30,132,242,0.52),
    0 0 21px rgba(30,132,242,0.92),
    0 0 34px rgba(30,132,242,0.78),
    0 0 54px rgba(30,132,242,0.92);
  }
  to {
    text-shadow:
    0 0 6px rgba(202,228,225,0.98),
    0 0 30px rgba(202,228,225,0.42),
    0 0 12px rgba(30,132,242,0.58),
    0 0 22px rgba(30,132,242,0.84),
    0 0 38px rgba(30,132,242,0.88),
    0 0 60px rgba(30,132,242,1);
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
    animation: neon .08s ease-in-out infinite alternate;
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
    color: #1A82AE;
  }
}


`;
