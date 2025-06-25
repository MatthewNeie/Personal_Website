import React from "react";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image1 from "../../images/consideratecarrot6.png";
import Image2 from "../../images/consideratecarrot8.png";
import Image3 from "../../images/consideratecarrot5.png";
import "../../styles/petstop.css";

const ConsiderateCarrot = () => {
  const [count, setCount] = useState(0);
  const leftHandleClick = () => {
    setCount(count > 0 ? count - 1 : 2);
  };

  const rightHandleClick = () => {
    setCount(count < 2 ? count + 1 : 0);
  };

  return (
    <div className="projects-petstop-div">
      <div className="petstop-top-div">
        <h1> Considerate Carrot </h1>
      </div>
      <div className="petstop-middle-div">
        <div className="petstop-left">
          {count !== 0 ? null : <img src={Image1} className="petstop-image" />}
          {count !== 1 ? null : <img src={Image2} className="petstop-image" />}
          {count !== 2 ? null : <img src={Image3} className="petstop-image" />}
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
        <div className="petstop-right">
          <div className="petstop-right-header">
            <h1>Features</h1>
          </div>
          <div className="petstop-right-details">
            <div className="petstop-right-desc">
              <p>Generate meal schedule from meal data</p>
              <p>Filter meals by allergens</p>
              <p>Interactive calendar</p>
              <p>Data saved in Local Storage</p>
              <p>Export menu as downloadable PDF</p>
              <p>Project management with Agile methodology</p>
            </div>
          </div>
        </div>
      </div>
      <div className="expensesplitter-bottom">
        <a
          href="https://github.com/chingu-voyages/V53-tier2-team-27"
          className="github-icon"
        >
          <GitHubIcon style={{ fontSize: "1.2vw" }} /> GitHub{" "}
        </a>
        <a
          href="https://considerate-carrot.netlify.app/"
          className="github-icon"
        >
          Deployed
        </a>
      </div>
    </div>
  );
};

export default ConsiderateCarrot;
