import styled from 'styled-components';


import theme from 'src/styles/theme';

const LoginStyled = styled.div`
font-family: "Rajdhani", cursive;
min-height: 100vh;

@media only screen and (min-width: 426px){
 .form {
   background-color : white;
  padding: ${theme.gutter/ 2}rem;
  border-radius: ${theme.gutter / 3}rem;
  width: 60%;
  margin: 0 20%;  
  border: 2px solid black;
  position: absolute;
  top: 200px;
 } 
  
  .title {
    font-family: "Rajdhani", cursive;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: ${theme.gutter / 3}rem;
  }

  .actions {
    margin-top: ${theme.gutter / 2}rem;
    text-align: center;
    /* & reprend la valeur du parent : ici ".actions" */
    &-button {
      text-transform: uppercase;
      padding: ${theme.gutter / 4}rem;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.lighter};
      border: 2px solid transparent;
      border-radius: ${theme.gutter / 4}rem;
      font-weight: 700;
    }
  }

  .links {
    text-align: center;
    margin-top: ${theme.gutter / 2}rem;
    &-item {
      color: ${theme.colors.alt};
      margin: ${theme.gutter / 6}rem
    }
  }
}

@media only screen and (max-width: 425px){
  .form {
   background-color : white;
  padding: ${theme.gutter/ 2}rem;
  border-radius: ${theme.gutter / 3}rem;
  width: 80%;
  margin: 0 10% ;  
  border: 2px solid black;
  position: absolute;
  top: 200px;
 } 
  
  .title {
    font-family: "Rajdhani", cursive;
    text-align: center;
    font-size: 2rem;
    margin-bottom: ${theme.gutter / 3}rem;
  }

  .actions {
    margin-top: ${theme.gutter / 2}rem;
    text-align: center;
    /* & reprend la valeur du parent : ici ".actions" */
    &-button {
      text-transform: uppercase;
      padding: ${theme.gutter / 4}rem;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.lighter};
      border: 2px solid transparent;
      border-radius: ${theme.gutter / 4}rem;
      font-weight: 700;
    }
  }
  
  .links {
    text-align: center;
    margin-top: ${theme.gutter / 2}rem;
    &-item {
      color: ${theme.colors.alt};
      margin: ${theme.gutter / 6}rem
    }
  }
}
  
`;

export default LoginStyled;
