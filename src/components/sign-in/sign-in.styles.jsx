import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 300px;
    margin-left:25px; 
    display: flex;
  flex-direction: column;
  }

`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display:flex;
    
  flex-direction: column;
  }
`;