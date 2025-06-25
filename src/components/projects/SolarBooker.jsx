import React from "react";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image1 from "../../images/solarbooker1.png";
import Image2 from "../../images/solarbooker2.png";
import Image3 from "../../images/solarbooker3.png";
import Image4 from "../../images/solarbooker4.png";
import Image5 from "../../images/solarbooker6.png";
import Image6 from "../../images/solarbooker5.png";
import Image7 from "../../images/solarbooker7.png";
import Image8 from "../../images/solarbooker8.png";
import "../../styles/solarbooker.css";

const SolarBooker = () => {
  const [count, setCount] = useState(0);
  const leftHandleClick = () => {
    setCount(count > 0 ? count - 1 : 7);
  };

  const rightHandleClick = () => {
    setCount(count < 7 ? count + 1 : 0);
  };

  return (
    <div className="projects-solarbooker-div">
      <div className="solarbooker-top-div">
        <h1> Solar Booker </h1>
      </div>
      <div className="solarbooker-middle-div">
        <div className="solarbooker-left">
          {count !== 0 ? null : (
            <img src={Image1} className="solarbooker-image" />
          )}
          {count !== 1 ? null : (
            <img src={Image2} className="solarbooker-image" />
          )}
          {count !== 2 ? null : (
            <img src={Image3} className="solarbooker-image" />
          )}
          {count !== 3 ? null : (
            <img src={Image4} className="solarbooker-image" />
          )}
          {count !== 4 ? null : (
            <img src={Image5} className="solarbooker-image" />
          )}
          {count !== 5 ? null : (
            <img src={Image6} className="solarbooker-image" />
          )}
          {count !== 6 ? null : (
            <img src={Image7} className="solarbooker-image" />
          )}
          {count !== 7 ? null : (
            <img src={Image8} className="solarbooker-image" />
          )}
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
        <div className="solarbooker-right">
          <div className="solarbooker-right-header">
            <h1>Features</h1>
          </div>
          <div className="solarbooker-right-details">
            <div className="solarbooker-right-desc">
              <p>Application form</p>
              <p>Administrator login</p>
              <p>Information saved in Local Storage</p>
              <p>Update request status</p>
              <p>Interactive map</p>
              <p>Export data as downloadable PDF</p>
              <p>Project management with Agile methodology</p>
            </div>
          </div>
        </div>
      </div>
      <div className="solarbooker-bottom">
        <a
          href="https://github.com/chingu-voyages/v52-tier2-team-26"
          className="github-icon"
        >
          <GitHubIcon style={{ fontSize: "1.2vw" }} /> GitHub{" "}
        </a>
        <a href="https://solarbooker.netlify.app/" className="github-icon">
          Deployed
        </a>
      </div>
    </div>
  );
};

export default SolarBooker;
