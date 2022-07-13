import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>

        <div className="nav-link-container">
          <Link className="nav-link-item" to="/shop">
            SHOP
          </Link>

          <Link className="nav-link-item" to="/contact">
            CONTACT
          </Link>

          <Link className="nav-link-item" to="/signin">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
