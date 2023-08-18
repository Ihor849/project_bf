// import { iconPawprint } from "../../images/icons";
// import { Button, ButtonTransparent } from "../Button/Button";

import { AuthBtnWrap, StyledLinkLog, StyledLinkReg } from "./Navigation.styled";



export const AuthNav = () => {
  return (
    
    <AuthBtnWrap>
    <StyledLinkReg to="/register" 
    exact="true"
    >
      Register
    </StyledLinkReg>
    <StyledLinkLog to="/login" 
    exact="true"
    >
      Login
    </StyledLinkLog>
  </AuthBtnWrap>
  );
}