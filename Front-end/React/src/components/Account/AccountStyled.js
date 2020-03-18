import styled from 'styled-components';


import theme from 'src/styles/theme';

const AccountStyled = styled.div`
min-height: 69vh;

 .divDesktop{
   background-color : white;
  padding: ${theme.gutter/ 2}rem;
  border-radius: ${theme.gutter / 3}rem;
  width: 500px;
  margin: 0 33%;  
  border: 2px solid black;
  position: absolute;
  top: 200px;
 } 
  
  .titleDesktop {
    text-align: center;
    font-size: 2rem;
    margin-bottom: ${theme.gutter / 3}rem;
  }
  .divMobile{
   background-color : white;
  padding: ${theme.gutter/ 2}rem;
  border-radius: ${theme.gutter / 3}rem;
  width: 300px;
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
  
`;

export default AccountStyled;
