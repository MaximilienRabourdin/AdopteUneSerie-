import styled from 'styled-components';

import theme from 'src/styles/theme';

const AccountStyled = styled.div`
min-height: 100vh;
overflow: hidden;
  
.links {
  text-align: center;
}

@media only screen and (min-width: 426px){
 .myAccount {
    overflow: hidden;
    background-color : white;
    padding: ${theme.gutter / 2}rem 0;
    border-radius: ${theme.gutter / 3}rem;
    width: 33%;
    margin: 0 33%;  
    border: 2px solid black;
    position: absolute;
    top: 200px;
  } 
  
  .title  {
    text-align: center;
    font-size: 2rem;
    margin-bottom: ${theme.gutter / 3}rem;
  }
} 

@media only screen and (max-width: 425px){
  .myAccount {
    background-color : white;
    padding: ${theme.gutter/ 2}rem;
    border-radius: ${theme.gutter / 3}rem;
    width: 80%;
    margin: 0 10% ;  
    border: 2px solid black;
    position: absolute;
    top: 200px;
  }
}
  
`;

export default AccountStyled;
