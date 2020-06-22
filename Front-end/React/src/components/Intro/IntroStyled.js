import styled from 'styled-components';

export default styled.div`

  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(0.25turn, #191D1F, black, #191D1F);

#logo {
  position: absolute;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 40%;
  left: 33%;
  right: 33%;
}

#mobile {
  height: 100px;
  width: 100px;
  position: relative;
  top: 40%;
}
  #caption {
    position: absolute;
    top: 110px;
  }

.div
{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: inset 0 50px 150px rgba(0, 0, 0, 1);
  border-bottom: 1px solid orange;
  animation: animate 1s ease-in-out forwards;
}

@keyframes animate
{
  0%
  {
    transform: translate(-50%,-50%) scale(0);
  }
  100%
  {
    transform: translate(-50%,-50%) scale(1);
  }
}

.div:nth-child(1)
{
  width: 1500px;
  height: 1350px;
}
.div:nth-child(2)
{
  width: 1250px;
  height: 1250px;
}

.div:nth-child(3)
{
  width: 1000px;
  height: 1000px;
}
.div:nth-child(4)
{
  width: 750px;
  height: 750px;
}
.div:nth-child(5)
{
  width: 500px;
  height: 500px;
}
.div:nth-child(5) img
{
  max-width: 250px;
  z-index: -1;
  transform: translateY(500px);
  animation: animateLogo 1s ease-in-out forwards;
  animation-delay: 1s;
}

@keyframes animateLogo
{
  0%
  {
    transform: translateY(500px);
  }
  100%
  {
    transform: translateY(0px);
  }
}

`;
