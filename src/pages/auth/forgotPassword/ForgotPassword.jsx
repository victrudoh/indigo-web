import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

// Styles
import { Wrapper, Content } from "./ForgotPassword.Styles";

// Images
import bg from "../../../assets/images/auth/signupverify/bg.webp";
import leftImage from "../../../assets/images/auth/signup/1/pubg1.jpg";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    setLoading(true);
    console.log("userDetails", userDetails);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ixnote-game-dev-backend.herokuapp.com/api/v1/auth/forgot-password",
        userDetails,
        {
          headers: { "content-type": "application/json" },
        }
      );
      console.log("response", response);
      setLoading(false);
      if (response.status === 200) {
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
          <form onSubmit={submit}>
            <h4>Forgot Password?</h4>
            <p>
              Please enter your account email below so we can help you find your
              account
            </p>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              onChange={onchangeHandler}
              defaultValue={userDetails.email}
            />

            {loading ? (
              <Spinner />
            ) : (
              <>
                <button type="submit">Recover account</button>
              </>
            )}
          </form>
        </Content>
      </Wrapper>
    </>
  );
};

export default ForgotPassword;
