import React from "react";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image1 from "../../images/petstop-image-1.png";
import Image2 from "../../images/petstop-image-2.png";
import Image3 from "../../images/petstop-image-3.png";
import Image4 from "../../images/petstop-image-4.png";
import Image5 from "../../images/petstop-image-5.png";
import Image6 from "../../images/petstop-image-6.png";
import Image7 from "../../images/petstop-image-7.png";
import Image8 from "../../images/petstop-image-8.png";
import Image9 from "../../images/petstop-image-9.png";
import Image10 from "../../images/petstop-image-10.png";
import "../../styles/petstop.css";

const PetStop = () => {
  const [count, setCount] = useState(0);
  const leftHandleClick = () => {
    setCount(count > 0 ? count - 1 : 9);
  };

  const rightHandleClick = () => {
    setCount(count < 9 ? count + 1 : 0);
  };

  return (
    <div className="projects-petstop-div">
      <div className="petstop-top-div">
        <h1> PetStop </h1>
      </div>
      <div className="petstop-middle-div">
        <div className="petstop-left">
          {count !== 0 ? null : <img src={Image1} className="petstop-image" />}
          {count !== 1 ? null : <img src={Image2} className="petstop-image" />}
          {count !== 2 ? null : <img src={Image3} className="petstop-image" />}
          {count !== 3 ? null : <img src={Image4} className="petstop-image" />}
          {count !== 4 ? null : <img src={Image5} className="petstop-image" />}
          {count !== 5 ? null : <img src={Image6} className="petstop-image" />}
          {count !== 6 ? null : <img src={Image7} className="petstop-image" />}
          {count !== 7 ? null : <img src={Image8} className="petstop-image" />}
          {count !== 8 ? null : <img src={Image9} className="petstop-image" />}
          {count !== 9 ? null : <img src={Image10} className="petstop-image" />}
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
              <p>Guest access and user access</p>
              <p>Sort and filter products by price, name, and category</p>
              <p>Add, edit, delete products</p>
              <p>Add, edit, remove items from cart</p>
              <p>Display reviews for individual products</p>
              <p>Profile page with user information</p>
              <p>Administrator access</p>
              <p>Create tables in PostgreSQL</p>
              <p>Insert, seed data</p>
              <p>Secure Bcrypt hashed passwords</p>
            </div>
          </div>
        </div>
      </div>
      <div className="petstop-bottom">
        <a
          href="https://github.com/MatthewNeie/PetStop"
          className="github-icon"
        >
          <GitHubIcon style={{ fontSize: "1.2vw" }} /> GitHub{" "}
        </a>
      </div>
    </div>
  );
};

export default PetStop;
