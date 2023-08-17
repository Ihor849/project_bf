import styled from 'styled-components';

export const StyledButton = styled.button`

font-family: inherit;
font-weight: 600;
height: 40px;

display: flex;
align-items: center;
justify-content: center;
gap: 8px;
background-color: var(--blue);
color: var(--fone-color);
border: none;
border-radius: 20px;
padding: 8px 20px ;
font-size: 16px;
cursor: pointer;
outline: none;

transition: all 0.4s ease; 

& >svg {

  fill: var(--fone-color);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, #88c7fc, #4da5f3);
  color: var(--fone-color);
 }

`;

export const StyledButtonTransparent = styled.button`

font-family: inherit;
font-weight: 600;
height: 40px;
width: 160px;

display: flex;
align-items: center;
justify-content: center;
gap: 8px;
background-color: var(--fone-color);
color: var(--blue);
border: 3px solid var(--blue);
border-radius: 20px;
padding: 8px 16px ;
font-size: 16px;
cursor: pointer;
outline: none;

transition: all 0.4s ease; 

& >svg {

  fill: var(--blue);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, #88c7fc, #4da5f3);
  color: var(--fone-color);
  border: 1px solid transparent;

  & >svg {
    transition: all 0.4s ease; 
    fill: var(--fone-color);
}
 }

`;