import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./styles.scss";
import { signOutUserStart } from "./../../redux/User/user.actions";
import { selectCardItemsCount } from "../../redux/Card/card.selectors";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCardItems: selectCardItemsCount(state),
});

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <nav
            className={classNames({
              header__navigation: true,
              visible: isMenuOpen,
            })}
          >
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
              {isMenuOpen ? (
                <li
                  className="user-panel__menu-burger"
                  onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                  <GrClose />
                </li>
              ) : (
                <li
                  className="user-panel__menu-burger"
                  onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                  <FaBars />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
