import { iconPawprint } from "../../images/icons";
import { Button, ButtonTransparent } from "../Button/Button";
import { AuthBtnWrap, StyledLink } from "./Navigation.styled";



export const AuthNav = () => {
  return (
    // <AuthBtnWrap>
    //   <Button>Login{iconPawprint}</Button>
    //   <ButtonTransparent>Registretion</ButtonTransparent>
      
    // </AuthBtnWrap>
    <div>
    <StyledLink to="/register" 
    exact="true"
    >
      Register
    </StyledLink>
    <StyledLink to="/login" 
    exact="true"
    >
      Login
    </StyledLink>
  </div>
  );
}