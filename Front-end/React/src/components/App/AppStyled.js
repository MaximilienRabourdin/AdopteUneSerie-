
import styled from 'styled-components';

import theme from 'src/styles/theme';

const AppStyled = styled.div`
  background-color: ${theme.colors.light};
  font-family: ${theme.fonts.text};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export default AppStyled;








