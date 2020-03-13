import styled from 'styled-components';

import theme from 'src/styles/theme';


export default styled.form`
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

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;

`;
