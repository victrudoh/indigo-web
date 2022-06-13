import React, { useState } from "react";

// Styles
import {
  Wrapper,
  Top,
  Stream,
  Bottom,
  Left,
  Right,
  Related,
  RelatedTop,
  RelatedScroll,
  RelatedBottom,
} from "./GameShowcase.Styles";

// Components
import Card from "./card/Card";

// Card Images in related videos section
import codm from "../../assets/images/home/stream/relatedVideos/codm.png";
import fortnite from "../../assets/images/home/stream/relatedVideos/fortnite.png";
import skyrim from "../../assets/images/home/stream/relatedVideos/skyrim.png";

// Social Media
import facebook from "../../assets/images/home/stream/socials/facebook.png";
import instagram from "../../assets/images/home/stream/socials/instagram.png";
import twitter from "../../assets/images/home/stream/socials/twitter.png";
import youtube from "../../assets/images/home/stream/socials/youtube.png";

const GameShowcase = () => {
  const [url, setUrl] = useState("https://www.youtube.com/embed/NvOfDampNUE");

  const getUrl = () => {
    console.log("CLick");
  };

  return (
    <>
      <Wrapper>
        <Top>
          <span className="bx bx-movie-play"></span>
          STREAM
        </Top>
        <Stream>
          <iframe
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* <video
            controls
            loop
            autoPlay
            poster={codm}
            src="https://www.callofduty.com/cdn/codm/videos/home/codm-hero-video-desktop.mp4"
          >
            <source type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </Stream>
        <Bottom>
          <Left>
            <div className="title">Game Showcase</div>
            <div className="time">2022 || 2h 35m</div>
            <div className="description">Highlights</div>
          </Left>
          <Right>
            <ul>
              <li>
                <span className="bx bx-list-plus"></span>
                <a href="/">Watchlist</a>
              </li>
              <li>
                <span className="bx bx-share-alt"></span>
                <a href="/">Share</a>
              </li>
              <li>
                <span className="bx bx-download"></span>
                <a href="/">Download</a>
              </li>
            </ul>
          </Right>
        </Bottom>
        <Related>
          <RelatedTop>Related videos</RelatedTop>
          <RelatedScroll>
            <Card title="CODM FInals" bg={codm} onClick={getUrl} />
            <Card title="Fortnite 3v3 tourney" bg={fortnite} />
            <Card title="Skyrim: Storm Cloak Raid" bg={skyrim} />
            <Card title="CODM FInals" bg={codm} />
            <Card title="Fortnite 3v3 tourney" bg={fortnite} />
            <Card title="Skyrim: Storm Cloak Raid" bg={skyrim} />
          </RelatedScroll>
          <hr />
          <RelatedBottom>
            <h3>FOLLOW ON |</h3>
            <ul>
              <li>
                <a href="/">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={youtube} alt="youtube" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
          </RelatedBottom>
        </Related>
      </Wrapper>
    </>
  );
};

export default GameShowcase;
