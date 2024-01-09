import React from 'react'
import RevealLogo, { RevealLogoCSS, RevealLogoGit, RevealLogoHTML, RevealLogoJS, RevealLogoNodeJS, RevealLogoReact, RevealLogoSQL } from './RevealLogo'
import Reveal from './Reveal'

const TechnicalSkills = () => {
  return (
    <div className="technical-skills-container">
      <h1 className="tech-skills-header">Technical Skills</h1>
        <div className="tech-skills-grid-div">
                <ul className="tech-skills-list">
                    <Reveal>
                    <ul className="">
                    <li className="tech-skills-listitem"> Visual Studio Code</li>
                    <li className="tech-skills-listitem"> Node.js</li>
                    <li className="tech-skills-listitem"> Git</li>
                    <li className="tech-skills-listitem"> JavaScript</li>
                    <li className="tech-skills-listitem"> PostgreSQL</li>
                    <li className="tech-skills-listitem"> CSS</li>
                    <li className="tech-skills-listitem"> HTML</li>
                    <li className="tech-skills-listitem"> React</li>
                    </ul>
                    </Reveal>
                </ul>
            <div className="one">
                <RevealLogo>
                    <img src="./src/images/visual-studio-code-logo.png" className="vsc-image"/>
                </RevealLogo>
            </div>
            <div className="two">
                <RevealLogoGit>
                    <img src="./src/images/git-logo.png" className="git-image" />
                </RevealLogoGit>
            </div>
            <div className="three">
                <RevealLogoReact>
                    <img src="./src/images/React-logo.png" className="react-image"/>
                </RevealLogoReact>
            </div>
            <div className="four">
                <RevealLogoJS>
                    <img src="./src/images/JavaScript-logo.png" className="java-image"/>
                </RevealLogoJS>
            </div>
            <div className="five">
                <RevealLogoCSS>
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" className="css-image"/>
                </RevealLogoCSS>
            </div>
            <div className="six">
                <RevealLogoNodeJS>
                    <img src="./src/images/nodejs-logo.png" className="nodejs-image"/>
                </RevealLogoNodeJS>
            </div>
            <div className="seven">
                <RevealLogoHTML>
                    <img src="./src/images/html-logo.png" className="html-image"/>
                </RevealLogoHTML>
            </div>
            <div className="eight">
                <RevealLogoSQL>
                    <img src="./src/images/postgreSQL-logo.png" className="postgreSQL-image"/>
                </RevealLogoSQL>
            </div>
        </div>
    </div>
  )
}

export default TechnicalSkills
