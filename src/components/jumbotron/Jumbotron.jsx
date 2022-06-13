import React from "react";

// Styles
import { Content, Left, Right, Wrapper } from "./Jumbotron.Styles";

// Image
import leftImage from "../../assets/images/png/glider.png";

const Jumbotron = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Left>
            <img src={leftImage} alt="media" />
          </Left>
          <Right>
            <h5>Enter the world of game tourneys</h5>
            <span>The possibilities are beyond your imagination</span>
            <p>
              Weekly tournaments, amazing rewards, compete with friends to rank
              higher on the leaderboards, game fame and valor amongst gamers and
              become a <b>Legendary</b> player on the platform.
            </p>
            <h6>Request early access to get started</h6>
          </Right>
        </Content>
      </Wrapper>
    </>
  );
};

export default Jumbotron;
