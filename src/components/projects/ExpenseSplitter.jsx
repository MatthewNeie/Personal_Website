import React from "react";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image1 from "../../images/expensesplitter5.png";
import Image2 from "../../images/expensesplitter1.png";
import Image3 from "../../images/expensesplitter2.png";
import Image4 from "../../images/expensesplitter3.png";
import Image5 from "../../images/expensesplitter4.png";
import "../../styles/expensesplitter.css";

const ExpenseSplitter = () => {
  const [count, setCount] = useState(0);
  const leftHandleClick = () => {
    setCount(count > 0 ? count - 1 : 4);
  };

  const rightHandleClick = () => {
    setCount(count < 4 ? count + 1 : 0);
  };

  return (
    <div className="projects-expensesplitter-div">
      <div className="expensesplitter-top-div">
        <h1> Expense Splitter </h1>
      </div>
      <div className="expensesplitter-middle-div">
        <div className="expensesplitter-left">
          {count !== 0 ? null : (
            <img src={Image1} className="expensesplitter-image" />
          )}
          {count !== 1 ? null : (
            <img src={Image2} className="expensesplitter-image" />
          )}
          {count !== 2 ? null : (
            <img src={Image3} className="expensesplitter-image" />
          )}
          {count !== 3 ? null : (
            <img src={Image4} className="expensesplitter-image" />
          )}
          {count !== 4 ? null : (
            <img src={Image5} className="expensesplitter-image" />
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
        <div className="expensesplitter-right">
          <div className="expensesplitter-right-header">
            <h1>Features</h1>
          </div>
          <div className="expensesplitter-right-details">
            <div className="expensesplitter-right-desc">
              <p>Add, edit, delete friends, groups, expenses</p>
              <p>Pie charts display analytics</p>
              <p>Information saved in local storage DB</p>
              <p>Reciept upload</p>
              <p>Filtered view tabs</p>
              <p>Search for specific friend, group, expense</p>
              <p>Export data as downloadable PDF</p>
              <p>Project management with Agile methodology</p>
            </div>
          </div>
        </div>
      </div>
      <div className="expensesplitter-bottom">
        <a
          href="https://github.com/chingu-voyages/v51-tier2-team-28"
          className="github-icon"
        >
          <GitHubIcon style={{ fontSize: "1.2vw" }} /> GitHub{" "}
        </a>
        <a
          href="https://expensesplittermain.netlify.app/"
          className="github-icon"
        >
          Deployed
        </a>
      </div>
    </div>
  );
};

export default ExpenseSplitter;
