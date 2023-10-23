import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({homeRef}) => {

    const handleClickHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <div className="sidebar-container">
        <div className="sidebar-logo-container">
            <h2 className="sidebar-logo-container-name">Matthew Neie</h2>
        </div>
      <div className="sidebar-nav-container">
        <div className="sidebar-home-icon2">
            <FontAwesomeIcon className="sidebar-home-icon" onClick={handleClickHome} icon={faHome} color="grey"/>
        </div>
        <div className="sidebar-profile-icon2">
            <FontAwesomeIcon className="sidebar-profile-icon" icon={faUser} color="grey" />
        </div>
        <div className="sidebar-contact-icon2">
            <FontAwesomeIcon className="sidebar-profile-icon" icon={faEnvelope} color="grey" />
        </div>
      </div>
      <div className="sidebar-links-container"><div className="footer-social-media">
                <div className="footer-github-icon">
                    <a href="https://github.com/MatthewNeie" className="footer-icons"><GitHubIcon /></a>
                </div>
                <div className="footer-linkedin-icon">
                    <a href="https://www.linkedin.com/in/matthew-neie" className="footer-icons"><LinkedInIcon /></a>
                </div>
                <div className="footer-facebook-icon">
                    <a href="https://www.facebook.com/mattneie" className="footer-icons"><FacebookIcon /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;
