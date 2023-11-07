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
            <div className="footer-contact-info">
                <div className="footer-contact-phone"><PhoneIcon />+1 805 215 0072</div>
                <div className="footer-contact-email"><EmailIcon />matneie@gmail.com</div>
            </div>
        </div>
            <div className="footer-right">
              <div className="footer-year">2023</div>
            </div>
    </div>
  )
}

export default Footer;