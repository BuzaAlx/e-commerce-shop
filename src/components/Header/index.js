import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./styles.scss";
import { signOutUserStart } from "./../../redux/User/user.actions";
import { selectCardItemsCount } from "../../redux/Card/card.selectors";
// import { FiRotateCw } from "react-icons/fi";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCardItems: selectCardItemsCount(state),
});

function Header() {
  const dispatch = useDispatch();
  const { currentUser, totalNumCardItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="logo-container">
            <Link to="/">
              <img src="logo.jpg" alt="logo" />
            </Link>
          </div>
          <nav className="header__navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </nav>
          {/* <div className="logo-container">
            <img src="./logo.png" alt="" />
          </div> */}
          <div className="user-panel">
            <ul>
              <Link to="/card" className="user-panel__basket-link">
                <FaShoppingCart size={25} />
                <div className="user-panel__number-goods">
                  {totalNumCardItems}
                </div>
              </Link>

              {currentUser && (
                <>
                  <li>
                    <Link to="/dashboard">My Account</Link>
                  </li>
                  <li>
                    <span onClick={() => signOut()}>LogOut</span>
                  </li>
                </>
              )}

              {!currentUser && (
                <>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
