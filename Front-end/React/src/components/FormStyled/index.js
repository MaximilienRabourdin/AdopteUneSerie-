import styled from 'styled-components';


import theme from 'src/styles/theme';

const FormStyled = styled.div`
min-height: 93vh;
 .form{
   background-color : white;
  padding: ${theme.gutter/ 2}rem;
  border-radius: ${theme.gutter / 3}rem;
  width: 500px;
  margin: 60px 33% 0;  
  border: 2px solid black;
 }
   
  
  .title {
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
  
`;

export default FormStyled;
