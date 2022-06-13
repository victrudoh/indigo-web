import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

// Styles
import {
  Wrapper,
  Content,
  Left,
  Right,
  Title,
  RightBody,
} from "./SignUp.Styles";

// Images
import bg from "../../../assets/images/auth/signup/1/bg2.jpg";
import leftImage from "../../../assets/images/auth/signup/1/pubg1.jpg";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const SignUp = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    city: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    setLoading(true);
    console.log("userDetails", userDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ixnote-game-dev-backend.herokuapp.com/api/v1/auth/signUp",
        userDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      console.log("response", response);
      setLoading(false);
      if (response.status === 201) {
        navigate("/signupgotomail");
      }
    } catch (err) {
      swal({
        title: "Oops!",
        text: err.response.data.error,
        icon: "error",
        buttons: false,
        timer: 3000,
        closeOnClickOutside: false,
        dangerMode: true,
      });
      setLoading(false);
    }
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
        <Content>
          <Left bg={leftImage} />
          <Right>
            <Title>Sign up</Title>
            <RightBody>
              <h4>Start your experience</h4>
              <form onSubmit={submit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  onChange={onchangeHandler}
                  defaultValue={userDetails.name}
                />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={onchangeHandler}
                  defaultValue={userDetails.username}
                />
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

                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  onChange={onchangeHandler}
                  defaultValue={userDetails.country}
                />
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  onChange={onchangeHandler}
                  defaultValue={userDetails.city}
                />
                <p>
                  By creating the account you agree to the Terms of Service and
                  Privacy Policy
                </p>

                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    <button type="submit">Sign up</button>
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

export default SignUp;
