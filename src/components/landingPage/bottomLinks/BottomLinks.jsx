import React from "react";

// Styles
import { Bottom } from "./BottomLinks.Styles";

// Components
import Google from "../../../assets/images/landingPage/google.png";
import Slack from "../../../assets/images/landingPage/slack.png";
import Dropbox from "../../../assets/images/landingPage/dropbox.png";
import Shopify from "../../../assets/images/landingPage/shopify.png";
import Atlassian from "../../../assets/images/landingPage/atlassian.png";

const BottomLinks = () => {
  return (
    <>
      <Bottom>
        <ul>
          <li>
            <a href="/">
              <img src={Google} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Slack} alt="" />
            </a>
          </li>
          {/* <li>
            <a href="/">
              <img src={Atlassian} alt="" />
            </a>
          </li> */}
          <li>
            <a href="/">
              <img src={Dropbox} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Shopify} alt="" />
            </a>
          </li>
        </ul>
      </Bottom>
    </>
  );
};

export default BottomLinks;
