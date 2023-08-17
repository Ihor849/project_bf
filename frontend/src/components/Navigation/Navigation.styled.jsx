// AuthNav
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

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
  height: 34px;
  padding: 8px 16px;
  text-decoration: none;
  color: var(--black);
  transition:  color 1s ease-in-out;
  font-weight: 600;
  transition: 0.3s ease;

  &.active {
    color: var(--yellow);
  }
`;
export const ButtonBurger = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  &> svg {
  fill: var(--yellow);
  @media screen and (min-width: 1279px) {
      display: n;
      
    }
}
`
