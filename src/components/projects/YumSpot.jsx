import React from "react";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image1 from "../../images/yumspot1.png";
import Image2 from "../../images/yumspot2.png";
import Image3 from "../../images/yumspot3.png";
import Image4 from "../../images/yumspot4.png";
import Image5 from "../../images/yumspot5.png";
import "../../styles/yumspot.css";

const YumSpot = () => {
  const [count, setCount] = useState(0);
  const leftHandleClick = () => {
    setCount(count > 0 ? count - 1 : 4);
  };

  const rightHandleClick = () => {
    setCount(count < 4 ? count + 1 : 0);
  };

  return (
    <div className="projects-yumspot-div">
      <div className="yumspot-top-div">
        <h1> YumSpot </h1>
      </div>
      <div className="yumspot-middle-div">
        <div className="yumspot-left">
          {count !== 0 ? null : <img src={Image1} className="yumspot-image" />}
          {count !== 1 ? null : <img src={Image2} className="yumspot-image" />}
          {count !== 2 ? null : <img src={Image3} className="yumspot-image" />}
          {count !== 3 ? null : <img src={Image4} className="yumspot-image" />}
          {count !== 4 ? null : <img src={Image5} className="yumspot-image" />}
          <p>
            <ArrowCircleLeftIcon
              onClick={() => {
                leftHandleClick();
              }}
            />
            <ArrowCircleRightIcon
              onClick={() => {
                rightHandleClick();
              }}
            />
          </p>
        </div>
        <div className="yumspot-right">
          <div className="yumspot-right-header">
            <h1>Features</h1>
          </div>
          <div className="yumspot-right-details">
            <div className="yumspot-right-desc">
              <p>User access</p>
              <p>Fetch data from external API</p>
              <p>Information saved in local storage DB</p>
              <p>Adjustable account balance</p>
              <p>Filter by location, food type</p>
              <p>Interactive map</p>
              <p>Cart functionality</p>
              <p>Project management with Agile methodology</p>
            </div>
          </div>
        </div>
      </div>
      <div className="yumspot-bottom">
        <a
          href="https://github.com/chingu-voyages/v50-tier2-team-16"
          className="github-icon"
        >
          <GitHubIcon style={{ fontSize: "1.2vw" }} /> GitHub{" "}
        </a>
        <a href="https://yumspot.netlify.app/" className="github-icon">
          Deployed
        </a>
      </div>
    </div>
  );
};

export default YumSpot;
