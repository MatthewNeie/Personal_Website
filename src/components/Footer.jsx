import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <div className="footer-social-media">
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
            <div className="footer-right">
                <div className="footer-contact-info">
                    <div className="footer-contact-phone"><PhoneIcon />+1 805 215 0072</div>
                    <div className="footer-contact-email"><EmailIcon />matneie@gmail.com</div>
                </div>
            </div>
    </div>
  )
}

export default Footer;