import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

// Styles
import { Wrapper, Content } from "./signUpVerify.Styles";

// components
import { Spinner } from "../../../../components/spinner/Spinner.Styles";

// Images
import bg from "../../../../assets/images/auth/signupverify/bg.webp";
import verifyIcon from "../../../../assets/images/auth/signupverify/icon.png";

const SignUpVerify = () => {
  const navigate = useNavigate();

  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://ixnote-game-dev-backend.herokuapp.com/api/v1/auth/activateAccount/${token}`
      );
      console.log("response", response);
      setLoading(false);
      if (response.status === 200) {
        navigate("/signin");
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

  return (
    <>
      <Wrapper bg={bg}>
        <Content>
          <form onSubmit={submit}>
            <img src={verifyIcon} alt="media" />
            <p>
              Congratulations! you have succefully completed your account
              verification, proceed to sign in.
            </p>

            {loading ? (
              <Spinner />
            ) : (
              <>
                <button type="submit">Sign in</button>
              </>
            )}
          </form>
        </Content>
      </Wrapper>
    </>
  );
};

export default SignUpVerify;
