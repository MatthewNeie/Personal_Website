import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faGears,
  faDiagramProject,
  faChessKnight,
} from "@fortawesome/free-solid-svg-icons";
import Cube from "./Cube";
import "../styles/sidebar.css";
import "../styles/cube.css";

const Sidebar = ({ homeRef, techRef, projectRef, contactRef }) => {
  const handleClickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickTech = () => {
    techRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
        {/* <Cube /> */}
        <FontAwesomeIcon className="chess-knight-icon" icon={faChessKnight} />
      </div>
      <div className="sidebar-nav-container">
        <div className="sidebar-home-icon2">
          <FontAwesomeIcon
            className="sidebar-home-icon"
            onClick={handleClickHome}
            icon={faHome}
            color="grey"
          />
        </div>
        <div className="sidebar-profile-icon2">
          <FontAwesomeIcon
            className="sidebar-profile-icon"
            onClick={handleClickTech}
            icon={faGears}
            color="grey"
          />
        </div>
        <div className="sidebar-profile-icon2">
          <FontAwesomeIcon
            className="sidebar-profile-icon"
            onClick={handleClickProjects}
            icon={faDiagramProject}
            color="grey"
          />
        </div>
        <div className="sidebar-contact-icon2">
          <FontAwesomeIcon
            className="sidebar-profile-icon"
            onClick={handleClickContact}
            icon={faEnvelope}
            color="grey"
          />
        </div>
      </div>
      <div className="sidebar-links-container">
        <div className="sidebar-social-media">
          <div className="sidebar-github-icon">
            <a href="https://github.com/MatthewNeie" className="sidebar-icons">
              <GitHubIcon />
            </a>
          </div>
          <div className="sidebar-linkedin-icon">
            <a
              href="https://www.linkedin.com/in/matthew-neie"
              className="sidebar-icons"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="sidebar-facebook-icon">
            <a
              href="https://www.facebook.com/mattneie"
              className="sidebar-icons"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
