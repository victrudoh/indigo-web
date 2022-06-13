import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Styles
import { Wrapper, Content, Inner, Logo } from "./Navbar.Styles";

// Components
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Wrapper>
        <Content>
          <Inner>
            <Logo>
              <a href="/">
                <img src={logo} alt="Indigo" />
              </a>
            </Logo>
            <ul>
              <li>
                <a href="/">HOME</a>
                {/* <NavLink exact to="/">
                  HOME
                </NavLink> */}
              </li>
              <li>
                <NavLink to="/features">FEATURES</NavLink>
              </li>
              <li>
                <a href="/stream">STREAM</a>
                {/* <NavLink to="/stream">STREAM</NavLink> */}
              </li>
              <li>
                <a href="/leaderboard">LEADERBOARD</a>
                {/* <NavLink to="/leaderboard">LEADERBOARD</NavLink> */}
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </Inner>
          <Inner>
            <ul>
              <li>
                <a href="/profile" className="signin">
                  Profile
                </a>
                {/* <NavLink to="/signin">Sign in</NavLink> */}
              </li>
              <li>
                <a href="/signin" className="signin">
                  Sign in
                </a>
                {/* <NavLink to="/signin">Sign in</NavLink> */}
              </li>
              <li>
                <a href="/signup" className="signup">
                  Sign up
                </a>
                {/* <NavLink className="signup" to="/signup">
                  Sign up
                </NavLink> */}
              </li>
            </ul>
          </Inner>
        </Content>
      </Wrapper>
    </>
  );
};

export default Navbar;
