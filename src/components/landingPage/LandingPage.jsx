import React from "react";

// Styles
import {
  Wrapper,
  Content,
  ContentLeft,
  InputField,
  LandingText,
  SmallerText,
  ContentRight,
} from "./LandingPage.Styles";

// Components
import LandingImage from "../../assets/images/landingPage/heroImage.png";
import BottomLinks from "./bottomLinks/BottomLinks";

const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <ContentLeft>
            <LandingText>
              We are connecting gaming commmunities in Africa ...
            </LandingText>
            <SmallerText>
              We are partnering with international gaming platformand bringing
              the competition to your mobile devices and consoles. Stand the
              chance of winning big with prize pools that span 55 african
              countries.
            </SmallerText>
            <InputField>
              <input placeholder="Your email address" />
              <button type="submit">Get updates</button>
            </InputField>
          </ContentLeft>
          <ContentRight>
            <img src={LandingImage} alt="Media" />
          </ContentRight>
        </Content>
        <BottomLinks />
      </Wrapper>
    </>
  );
};

export default LandingPage;
