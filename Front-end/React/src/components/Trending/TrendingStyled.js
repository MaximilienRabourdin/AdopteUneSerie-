import styled from 'styled-components';

export default styled.div`
min-height: 100vh;
.search {
  padding: 130px 0 30px 0;
}

.head{
  position: fixed;
  padding: 50px 0 60px;
  text-align: center;
  font-size: 2em;
  width: 100%; 
  margin-top: 20px;
  position: fixed;
  width: 100%;
  height: 150px; 
}

.neonStyle{
  font-size: 2em;
  color: black;
  font-family: "Vibur", cursive;
  animation: neon .08s ease-in-out infinite alternate;
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


`;
