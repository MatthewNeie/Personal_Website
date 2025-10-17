import React from "react";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image1 from "../../images/palettepro1.png";
import Image2 from "../../images/palettepro2.png";
import Image3 from "../../images/palettepro3.png";
import Image4 from "../../images/palettepro4.png";
import "../../styles/palettepro.css";

const PalettePro = () => {
  const [open, setOpen] = useState("closed");
  const [count, setCount] = useState(0);
  const leftHandleClick = () => {
    setCount(count > 0 ? count - 1 : 3);
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
    <div className="projects-palettepro-div">
      <div
        className="palettepro-top-div"
        onClick={() => {
          handleOpen();
        }}
      >
        <h1> PalettePro </h1>
      </div>
      {open === "closed" ? null : (
        <>
          <div className="palettepro-middle-div">
            <div className="palettepro-left">
              {count !== 0 ? null : (
                <img src={Image1} className="palettepro-image" />
              )}
              {count !== 1 ? null : (
                <img src={Image2} className="palettepro-image" />
              )}
              {count !== 2 ? null : (
                <img src={Image3} className="palettepro-image" />
              )}
              {count !== 3 ? null : (
                <img src={Image4} className="palettepro-image" />
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
            <div className="palettepro-right">
              <div className="palettepro-right-header">
                <h1>Features</h1>
              </div>
              <div className="palettepro-right-details">
                <div className="palettepro-right-desc">
                  <p>Interactive color picker</p>
                  <p>Dropdown menus</p>
                  <p>Form text fields</p>
                  <p>Groq AI</p>
                  <p>Project management with Agile methodology</p>
                </div>
              </div>
            </div>
          </div>
          <div className="palettepro-bottom">
            <a
              href="https://github.com/chingu-voyages/v49-tier2-team-18"
              className="github-icon"
            >
              <GitHubIcon style={{ fontSize: "1.2vw" }} /> GitHub{" "}
            </a>
            <a
              href="https://color-picker-project-omega.vercel.app/"
              className="github-icon"
            >
              Deployed
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default PalettePro;
