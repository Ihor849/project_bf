import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { iconLogo, iconMenuHamburger} from "../../images/icons";
import {AuthNav} from "../Navigation/AuthNav"



import { Nav } from "../Navigation/Nav";

import { AuthNavWrap, LayoutWrap, LogoLink } from "./SharedLayout.styled";
import { ButtonBurger } from "../Navigation/Navigation.styled";

export const SharedLayout = () => {
  return (
    <div className="sharedLayout">
      <LayoutWrap className="layoutWrap">
        <LogoLink to="/">{iconLogo}</LogoLink>
        <Nav />
        <AuthNavWrap>
          <AuthNav/>
          <ButtonBurger>{iconMenuHamburger}</ButtonBurger>
        </AuthNavWrap>
        
      </LayoutWrap>
      <Suspense>
          <Outlet />
        </Suspense>
    </div>
  );
};
