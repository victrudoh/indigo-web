import React from "react";

//Styles
import { Wrapper, Content } from "./SignUpCheckMail.Styles";

// Images
import bg from "../../../../assets/images/auth/signupverify/bg.webp";
import verifyIcon from "../../../../assets/images/auth/signupverify/sentToMail.png";

const SignUpCheckMail = () => {
  return (
    <>
      <Wrapper bg={bg}>
        <Content>
          <img src={verifyIcon} alt="media" />
          <p>
            We've sent you a mail to the email you provided, please visit your
            mailbox to proceed, thank you.
          </p>
        </Content>
      </Wrapper>
    </>
  );
};

export default SignUpCheckMail;
