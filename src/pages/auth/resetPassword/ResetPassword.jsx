import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

// Styles
import { Wrapper, Content } from "./ResetPassword.Styles";

// Images
import bg from "../../../assets/images/auth/signupverify/bg.webp";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const ResetPassword = () => {
  const navigate = useNavigate();

  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  console.log(
    "🚀 ~ file: ResetPasword.jsx ~ line 19 ~ ResetPassword ~ token",
    token
  );

  const [userDetails, setUserDetails] = useState({
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    setLoading(true);
    console.log("userDetails", userDetails);
    e.preventDefault();
    const response = await axios.put(
      `https://ixnote-game-dev-backend.herokuapp.com/api/v1/auth/reset-password/${token}`,
      userDetails,
      {
        headers: { "content-type": "application/json" },
      }
    );
    console.log("response", response);
    setLoading(false);
    if (response.status === 200) {
      navigate("/signin");
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
            <h4>Reset Password</h4>
            <p>Please enter your new password below to access your account</p>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={onchangeHandler}
              defaultValue={userDetails.password}
            />

            {loading ? (
              <Spinner />
            ) : (
              <>
                <button type="submit">Reset password</button>
              </>
            )}
          </form>
        </Content>
      </Wrapper>
    </>
  );
};

export default ResetPassword;
