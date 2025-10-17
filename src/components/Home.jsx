import React from "react";
import { useState, useRef } from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Sidebar from "./Sidebar";
import Education from "./Education";
import { Work } from "@mui/icons-material";
import Contact from "./Contact";
import Reveal from "./Reveal";
import Projects from "./Projects";
import TechnicalSkills from "./TechnicalSkills";
import Image from "../images/LinkedIN4.jpg";
import "../styles/home.css";

const Home = ({ calRef, fsRef, homeRef, techRef, projectRef, contactRef }) => {
  const [additionalInfo, setAdditionalInfo] = useState(false);

  const handleClickAddInfo = () => {
    if (additionalInfo === true) {
      setAdditionalInfo(false);
    } else {
      setAdditionalInfo(true);
    }
  };

  const handleClickCalPoly = () => {
    calRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickFS = () => {
    fsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [slideIndex, setSlideIndex] = useState(0);

  const styles = {
    transform: `translate(${slideIndex * -100}vw)`,
  };

  const leftHandleClick = () => {
    setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  };

  const rightHandleClick = () => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  return (
    <div>
      <Sidebar
        homeRef={homeRef}
        techRef={techRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <div>
        <div className="home-container" ref={homeRef}>
          <div className="home-body">
            <Reveal>
              <div className="home-body-left">
                <Reveal>
                  <h1 className="home-name">Matthew Neie</h1>
                </Reveal>
                <Reveal>
                  <h1 className="home-title"> Web Developer </h1>
                </Reveal>
                <Reveal>
                  <p className="home-description">
                    I am a web developer and I recently completed an accelerated
                    program for web development with FullStack Academy. I am
                    interested in developing my skills and adding projects to my
                    portfolio by taking on freelance projects or working on
                    projects with other developers. I am interested in full time
                    or part time employment opportunities, as well as
                    internships or apprenticeships. Feel free to contact me by
                    completing my contact form below.{" "}
                  </p>
                </Reveal>
                <br></br>
                <Reveal>
                  <p className="home-quote"></p>
                </Reveal>
                <Reveal>
                  <p className="home-quote-author"></p>
                </Reveal>
              </div>
            </Reveal>
            <div className="home-body-right">
              <img src={Image} className="home-image" />
            </div>
          </div>
        </div>
        <TechnicalSkills techRef={techRef} />
        <Projects projectRef={projectRef} />
        {additionalInfo ? <Education calRef={calRef} /> : null}
        <Contact contactRef={contactRef} />
      </div>
    </div>
  );
};

export default Home;
