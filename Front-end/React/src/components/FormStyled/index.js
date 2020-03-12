import styled from 'styled-components';

import theme from 'src/assets/styles/theme';

const FormStyled = styled.form`
  background-color: ${theme.colors.lighter};
  padding: ${theme.gutter}rem;
  border-radius: ${theme.gutter / 3}rem;
  width: 500px;
  max-width: 80%;
  align-self: center;
  

  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: ${theme.gutter / 2}rem;
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
      &:hover {
        background-color: ${theme.colors.lighter};
        color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
      }
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
