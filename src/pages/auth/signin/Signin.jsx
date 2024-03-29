import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { success, error } from "../../../helpers/Alert";

// Styles
import {
  Wrapper,
  Content,
  Left,
  Right,
  Title,
  RightBody,
} from "./Signin.Styles";

// Images
import bg from "../../../assets/images/auth/signin/bg2.jpg";
import leftImage from "../../../assets/images/auth/signin/anthem.jpg";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const Signin = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    setLoading(true);
    console.log("userDetails", userDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ixnote-game-dev-backend.herokuapp.com/api/v1/auth/login",
        userDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      console.log("response", response);
      const token = response.data.token;
      setLoading(false);
      if (response.status === 200) {
        localStorage.setItem("token", token);
        success("Login Successful");
        navigate("/profile");
      }
    } catch (err) {
      error(err.response.data.error);
      setLoading(false);
      // }
    }
  };

  const gotoForgotPassword = async () => {
    navigate("/forgotpassword");
  };

  const onchangeHandler = async (e) => {
    e.persist();
    setUserDetails((userDetails) => ({
      ...userDetails,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Wrapper bg={bg}>
        {/* <Alert /> */}
        <Content>
          <Left bg={leftImage} />
          <Right>
            <Title>Sign in</Title>
            <RightBody>
              <h4>It's game time...</h4>
              <form onSubmit={submit}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  onChange={onchangeHandler}
                  defaultValue={userDetails.email}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={onchangeHandler}
                  defaultValue={userDetails.password}
                />
                <p onClick={gotoForgotPassword}>
                  {/* <a href="/signin">forgot password?</a> */}
                  forgot password?
                </p>

                {loading ? (
                  <>
                    <br />
                    <Spinner />
                  </>
                ) : (
                  <>
                    <button type="submit">Sign in</button>
                  </>
                )}
              </form>
            </RightBody>
          </Right>
        </Content>
      </Wrapper>
    </>
  );
};

export default Signin;
