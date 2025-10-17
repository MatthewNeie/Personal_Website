import React from "react";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image1 from "../../images/surgerystatus1.png";
import Image2 from "../../images/surgerystatus3.png";
import Image3 from "../../images/surgerystatus2.png";
import "../../styles/petstop.css";

const SurgeryStatus = () => {
  const [open, setOpen] = useState("closed");
  const [count, setCount] = useState(0);
  const leftHandleClick = () => {
    setCount(count > 0 ? count - 1 : 2);
  };

  const rightHandleClick = () => {
    setCount(count < 2 ? count + 1 : 0);
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
        <h1>Surgery Status</h1>
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
                  <p>Patient status display</p>
                  <p>Surgical status updates</p>
                  <p>Add new patient</p>
                  <p>Edit patient information</p>
                  <p>Patient waiting room screen</p>
                  <p>Administrator access</p>
                  <p>Project management with Agile methodology</p>
                </div>
              </div>
            </div>
          </div>
          <div className="expensesplitter-bottom">
            <a
              href="https://github.com/chingu-voyages/V56-tier2-team-25"
              className="github-icon"
            >
              <GitHubIcon style={{ fontSize: "1.2vw" }} /> GitHub{" "}
            </a>
            <a
              href="https://v56-tier2-team-25-chingu.vercel.app/"
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

export default SurgeryStatus;
