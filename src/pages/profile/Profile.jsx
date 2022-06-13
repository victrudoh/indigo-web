import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Styles
import {
  Wrapper,
  Content,
  Left,
  LeftTop,
  LeftTopLogo,
  LeftBottom,
  Right,
  RightTitle,
  RightBody,
} from "./Profile.Styles";

// Components
import BottomLinks from "../../components/landingPage/bottomLinks/BottomLinks";

// images and icons
import logo from "../../assets/images/profile/logo.png";
import DP from "../../assets/images/profile/itachi.jpg";
import instagram from "../../assets/images/profile/Instagram.png";
import linkedIn from "../../assets/images/profile/LinkedIn.png";
import twitter from "../../assets/images/profile/Twitter.png";
import dev from "../../assets/images/profile/DEV.to.png";
import rightBg from "../../assets/images/profile/rightBg.png";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    DP: "",
    id: "#",
    xp: 0,
    username: "Noob",
    rank: "Rookie",
    matches: 0,
    date: "",
    wins: 0,
    loses: 0,
  });

  const getProfile = async () => {
    try {
      const response = await axios.get(
        "https://ixnote-game-dev-backend.herokuapp.com/api/v1/users/profile",
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const user = response.data.user;

      // Get today's date
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;

      setUser({
        DP: user.user_img,
        id: user.gameId,
        xp: user.experience,
        username: user.username,
        rank: user.rank,
        matches: user.matches,
        date: today,
        wins: user.won,
        loses: user.lost,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  console.log("user: ", user);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Wrapper>
      <Content>
        <Left>
          <LeftTop>
            <LeftTopLogo logo={logo} />
            <img src={user.DP == null ? DP : user.DP} alt="media" />
            <div className="name">{user.username}</div>
            <div className="team">{user.id}</div>
            <div className="rank">Rank: {user.rank}</div>
            <div className="id">Exp: {user.xp}</div>
            <a href="/profile">Edit your profile</a>
          </LeftTop>
          <LeftBottom>
            <div className="bottomDesign">
              <a href="/">
                <img src={instagram} alt="" />
              </a>
              <a href="/">
                <img src={linkedIn} alt="" />
              </a>
              <a href="/">
                <img src={twitter} alt="" />
              </a>
              <a href="/">
                <img src={dev} alt="" />
              </a>
            </div>
          </LeftBottom>
        </Left>
        <Right>
          <RightTitle>
            <div className="smallTitle">Competition</div>
            <div className="bigTitle">Profile</div>
          </RightTitle>
          <RightBody bg={rightBg}>
            <div class="outer">
              <div class="inner">
                <i class="top left up"></i>
                <div class="content">
                  <div className="flexRow">
                    <div className="item">
                      <h4>Matches:</h4>
                      <h5>{user.matches}</h5>
                    </div>
                    <div className="item">
                      <h4>Date:</h4>
                      <h5>{user.date}</h5>
                    </div>
                  </div>
                  <div className="flexRow">
                    <div className="item">
                      <h4>Wins:</h4>
                      <h5>{user.wins}</h5>
                    </div>
                    <div className="item">
                      <h4>Loses:</h4>
                      <h5>{user.loses}</h5>
                    </div>
                  </div>
                  <div className="flexRow">
                    <div className="doubleDeck">
                      <h4>Competition</h4>
                      <h5>active</h5>
                    </div>
                    <div className="doubleDeck">
                      <h4>Type</h4>
                      <h5>Solo</h5>
                    </div>
                    <div className="doubleDeck">
                      <h4>Level</h4>
                      <h5>1</h5>
                    </div>
                  </div>
                </div>
                <i class="bottom left down"></i>
              </div>
            </div>
          </RightBody>
        </Right>
      </Content>
      <BottomLinks />
    </Wrapper>
  );
};

export default Profile;
