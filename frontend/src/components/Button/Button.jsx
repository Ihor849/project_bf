import { StyledButton, StyledButtonTransparent } from './Button.styled';

export const Button = ({ children, ...props }) => {
  return <StyledButton type='button' {...props}> {children}</StyledButton>;
};



export const ButtonTransparent = ({ children, ...props }) => {
  return <StyledButtonTransparent type='button' {...props}> {children}</StyledButtonTransparent>;
};