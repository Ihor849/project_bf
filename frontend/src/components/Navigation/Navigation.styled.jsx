// AuthNav
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const buttonStyles =`
    
font-family: inherit;
font-weight: 600;
height: 40px;

display: flex;
align-items: center;
justify-content: center;
gap: 8px;
border: none;
border-radius: 20px;
padding: 8px 20px ;
font-size: 16px;
cursor: pointer;
outline: none;

transition: all 0.4s ease; 

`

export const hoverStylesY =`
& >svg {

  fill: var(--fone-color);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, var( --gradient-yl), var(--gradient-yr));
  color: var(--fone-color);
 }
}
`

export const ripple=`
position: relative;
overflow: hidden;

&:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #5b24ff 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.4s, opacity 1s;
}

&:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}

&:disabled {
  cursor: none;
  background-color: #888;

  &:hover {
    color: #eee;
  background-color: #888;
  
  }
}
`


export const AuthBtnWrap = styled.div`
    display: none;
    
    @media screen and (min-width: 768px) {
      display: flex;
      justify-self: flex-end;
      gap: 20px;
      
    }

`
// Nav
export const NavWrap = styled.div`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 1279px) {
      display: none;
      
    }

`
export const StyledLink = styled(NavLink)`
  
  color: var(--black);
  text-decoration:none;
  font-size: 20px;
  font-weight:500;
  &:active{
  color: var(--yellow);}
`

export const StyledLinkLog = styled(NavLink)`
  ${buttonStyles} ;
 ${ripple} ;
 
 background-color: var(--yellow);
 color: var(--fone-color);
 width: 165px;
 
 ${hoverStylesY} ;
`;

export const StyledLinkReg = styled(NavLink)`
  ${buttonStyles} ;
 ${ripple} ;

border: 2px solid var(--yellow);
background-color: var(--fone-color);
color: var(--yellow);
width: 165px;
transition: all 0.4s ease; 

${hoverStylesY} ;

`;



export const StyledRegButton = styled.button`
/* ${buttonStyles} ;
 ${ripple} ;

border: 2px solid var(--yellow);
background-color: var(--fone-color);
color: var(--yellow);
width: 165px;
transition: all 0.4s ease; 

${hoverStylesY} ;

  &:hover  {
  border: 2px solid transparent;
 } */
`;
export const ButtonBurger = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  &> svg {
  fill: var(--yellow);
  @media screen and (min-width: 1279px) {
      display: none;
      
    }
}
`
