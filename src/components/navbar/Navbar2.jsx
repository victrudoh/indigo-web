import React from "react";
import { useNavigate, Link } from "react-router-dom";

// Styles
import "./Navbar2.css";

// Components
import logo from "../../assets/images/logo.png";

const Navbar2 = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log("token", token);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <section className="top-nav">
        <div>
          <a href="/">
            <img src={logo} alt="Indigo" />
          </a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">TOURNAMENTS </Link>
          </li>
          <li>
            <Link to="/stream">STREAM</Link>
          </li>
          <li>
            <Link to="leaderboard">LEADERBOARD</Link>
          </li>
          <li>
            <Link to="contact">CONTACT</Link>
          </li>

          {token ? (
            <>
              <li className="hide">
                <a href="/profile" className="signin">
                  PROFILE
                </a>
              </li>
              <li className="hide">
                <a className="logout" onClick={logoutHandler}>
                  LOG OUT
                </a>
              </li>
            </>
          ) : (
            ""
          )}

          {!token ? (
            <>
              <li className="hide">
                <a href="/signin" className="signin">
                  SIGN IN
                </a>
              </li>
              <li className="hide">
                <a href="/signup">SIGN UP</a>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>

        <ul className="menu2">
          {token ? (
            <>
              <li>
                <a href="/profile" className="signin">
                  PROFILE
                </a>
              </li>
              <li>
                <a className="logout" onClick={logoutHandler}>
                  LOG OUT
                </a>
              </li>
            </>
          ) : (
            ""
          )}

          {!token ? (
            <>
              <li>
                <Link to="signin">SIGN IN</Link>
              </li>
              <li>
                <Link to="signup" className="signup">
                  SIGN UP
                </Link>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </section>
    </>
  );
};

export default Navbar2;
