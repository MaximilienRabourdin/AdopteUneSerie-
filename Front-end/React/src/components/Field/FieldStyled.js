
import styled from 'styled-components';

import theme from 'src/assets/styles/theme';

const FieldStyled = styled.div`
  margin: ${theme.gutter}rem 0;
  .label {
    display: block;
    margin-bottom: ${theme.gutter / 5}rem;
  }
  .input {
    font-size: 1.3em;
    padding: ${theme.gutter / 2}rem ${theme.gutter / 1.5}rem;
    border-radius: ${theme.gutter / 6}rem;
    border: 2px solid ${theme.colors.content};
    width: 100%;
    color: ${theme.colors.content};
    &:focus {
      border-color: ${theme.colors.primary};
    }
  }
`;

export default FieldStyled;
