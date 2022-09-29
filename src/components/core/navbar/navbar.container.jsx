import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navbar.scss";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../../contexts/user.context";
import { userSignOut } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDownComponent from "../../cart-dropdown/cart-dropdown.component";
const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  const logOut = async () => {
    await userSignOut();
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={logOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon></CartIcon>
        </div>
      </div>
      <CartDropDownComponent></CartDropDownComponent>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default NavBar;
