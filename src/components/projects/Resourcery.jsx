import React from "react";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image1 from "../../images/resourcery1.png";
import Image2 from "../../images/resourcery2.png";
import Image3 from "../../images/resourcery3.png";
import Image4 from "../../images/resourcery4.png";
import "../../styles/petstop.css";

const Resourcery = () => {
  const [open, setOpen] = useState("closed");
  const [count, setCount] = useState(0);
  const leftHandleClick = () => {
    setCount(count > 0 ? count - 1 : 2);
  };

  const rightHandleClick = () => {
    setCount(count < 3 ? count + 1 : 0);
  };

  const handleOpen = () => {
    if (open === "closed") {
      setOpen("open");
    } else {
      setOpen("closed");
    }
  };

  return (
    <div className="projects-petstop-div">
      <div
        className="petstop-top-div"
        onClick={() => {
          handleOpen();
        }}
      >
        <h1> Resourcery </h1>
      </div>
      {open === "closed" ? null : (
        <>
          <div className="petstop-middle-div">
            <div className="petstop-left">
              {count !== 0 ? null : (
                <img src={Image1} className="petstop-image" />
              )}
              {count !== 1 ? null : (
                <img src={Image2} className="petstop-image" />
              )}
              {count !== 2 ? null : (
                <img src={Image3} className="petstop-image" />
              )}
              {count !== 3 ? null : (
                <img src={Image4} className="petstop-image" />
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
            <div className="petstop-right">
              <div className="petstop-right-header">
                <h1>Features</h1>
              </div>
              <div className="petstop-right-details">
                <div className="petstop-right-desc">
                  <p>Search input with tag selection</p>
                  <p>Fetch resources from API with paginated results</p>
                  <p>AI Chatbot that helps users navigate site</p>
                  <p>AI Chat history and context saved in Local Storage</p>
                  <p>Error handling</p>
                  <p>Responsive UI</p>
                  <p>Project management with Agile methodology</p>
                </div>
              </div>
            </div>
          </div>
          <div className="expensesplitter-bottom">
            <a
              href="https://github.com/chingu-voyages/V55-tier2-team-26"
              className="github-icon"
            >
              <GitHubIcon style={{ fontSize: "1.2vw" }} /> GitHub{" "}
            </a>
            <a href="https://resourcery.netlify.app/" className="github-icon">
              Deployed
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Resourcery;
