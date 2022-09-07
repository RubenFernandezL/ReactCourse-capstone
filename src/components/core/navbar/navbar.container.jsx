import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navbar.scss";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../../contexts/user.context";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/auth">
            SING IN
          </Link>
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
