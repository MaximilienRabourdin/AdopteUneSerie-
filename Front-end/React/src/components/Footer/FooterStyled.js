
import styled from 'styled-components';

import theme from 'src/assets/styles/theme';

// Composant stylisé

const FooterStyled = styled.footer`
  justify-content: space-between;
  color: #ccc;
  padding: ${theme.gutter * 2}rem;
  margin-top: ${theme.gutter}rem;
  background-color: ${theme.darkColor};

.Contact {
  justify-content: flex-end;
}

`;

// Export du composant
export default FooterStyled;
