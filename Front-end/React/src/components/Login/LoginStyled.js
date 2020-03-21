import styled from 'styled-components';


import theme from 'src/styles/theme';

const LoginStyled = styled.div`
min-height: 90vh;
 .formDesktop{
   background-color : white;
  padding: ${theme.gutter/ 2}rem;
  border-radius: ${theme.gutter / 3}rem;
  width: 60%;
  margin: 0 20%;  
  border: 2px solid black;
  position: absolute;
  top: 200px;
 } 
  
  .titleDesktop {
    text-align: center;
    font-size: 2rem;
    margin-bottom: ${theme.gutter / 3}rem;
  }

  .actionsDesktop {
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

  .linksDesktop {
    text-align: center;
    margin-top: ${theme.gutter / 2}rem;
    &-item {
      color: ${theme.colors.alt};
      margin: ${theme.gutter / 6}rem
    }
  }
  
  .formMobile{
   background-color : white;
  padding: ${theme.gutter/ 2}rem;
  border-radius: ${theme.gutter / 3}rem;
  width: 80%;
  margin: 0 10% ;  
  border: 2px solid black;
  position: absolute;
  top: 200px;
 } 
  
  .titleMobile {
    text-align: center;
    font-size: 2rem;
    margin-bottom: ${theme.gutter / 3}rem;
  }

  .actionsMobile {
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
  
  .linksMobile {
    text-align: center;
    margin-top: ${theme.gutter / 2}rem;
    &-item {
      color: ${theme.colors.alt};
      margin: ${theme.gutter / 6}rem
    }
  }
  
`;

export default LoginStyled;
