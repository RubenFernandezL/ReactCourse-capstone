import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navbar.scss";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../../contexts/user.context";
import { userSignOut } from "../../../utils/firebase/firebase.utils";

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logOut = async () => {
    await userSignOut();
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={logOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <Link className="nav-link" to="/">
            HOME
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default NavBar;
