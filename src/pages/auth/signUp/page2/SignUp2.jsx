import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Left,
  Right,
  Title,
  RightBody,
  RecommendTop,
  RecommendBottom,
} from "./SignUp2.Styles";

// Images
import bg from "../../../../assets/images/auth/signup/2/bg.jpg";
import leftImage from "../../../../assets/images/auth/signup/2/heroImage.jpg";

const SignUp2 = () => {
  return (
    <>
      <Wrapper bg={bg}>
        <Content>
          <Left bg={leftImage} />
          <Right>
            <Title>Sign up (2/2)</Title>
            <RightBody>
              <h3>Your platform, your preferences</h3>
              <h4>Choose at least 1 (one) game to follow:</h4>
              <h6>Recommendations</h6>
              <form method="get" action="/signin">
                <RecommendTop>
                  <>
                    <input type="checkbox" name="valorant" id="valorant" />
                    <label htmlFor="valorant">Valorant</label>
                  </>
                  <>
                    <input
                      type="checkbox"
                      name="leagueoflegends"
                      id="leagueoflegends"
                    />
                    <label htmlFor="leagueoflegends">League of legends</label>
                  </>
                  <>
                    <input
                      type="checkbox"
                      name="rocketleague"
                      id="rocketleague"
                    />
                    <label htmlFor="rocketleague">Rocket league</label>
                  </>
                </RecommendTop>
                <RecommendTop>
                  <>
                    <input type="checkbox" name="callofduty" id="callofduty" />
                    <label htmlFor="callofduty">Call of duty</label>
                  </>
                  <>
                    <input type="checkbox" name="fortnite" id="fortnite" />
                    <label htmlFor="fortnite">Fortnite</label>
                  </>
                  <>
                    <input type="checkbox" name="FIFA" id="FIFA" />
                    <label htmlFor="FIFA">FIFA</label>
                  </>
                </RecommendTop>
                <RecommendBottom className="my-3">
                  {/* <input
                    className="search"
                    type="text"
                    name="other"
                    id="other"
                    placeholder="Other"
                  /> */}

                  <h4 className="fw-bold">Statistics view mode</h4>
                  <div className="checks">
                    <>
                      <input type="checkbox" name="simple" id="simple" />
                      <label htmlFor="simple">Simple</label>
                    </>
                    <>
                      {/* <input type="radio" name="unsimple" id="unsimple" /> */}
                      <input type="checkbox" name="complex" id="complex" />
                      <label htmlFor="complex">Complex</label>
                    </>
                  </div>
                </RecommendBottom>
                <button type="submit">Create account</button>
              </form>
            </RightBody>
          </Right>
        </Content>
      </Wrapper>
    </>
  );
};

export default SignUp2;
