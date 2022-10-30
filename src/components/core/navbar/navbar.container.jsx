import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import {
  NavigationStyles,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navbar.styles";
import { Outlet } from "react-router-dom";
import { userSignOut } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDownComponent from "../../cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../store/user/user.selector";
import { getCart } from "../../../store/cart/cart.selector";

const NavBar = () => {
  const { isOpen } = useSelector(getCart);
  const currentUser = useSelector(getCurrentUser);

  const logOut = async () => {
    await userSignOut();
  };
  return (
    <Fragment>
      <NavigationStyles>
        <LogoContainer to="/">
          <CrownLogo className="logo"></CrownLogo>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={logOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinksContainer>
      </NavigationStyles>
      {isOpen && <CartDropDownComponent></CartDropDownComponent>}
      <Outlet></Outlet>
    </Fragment>
  );
};

export default NavBar;
