import React from 'react'
import RevealLogo, { RevealLogoCSS, RevealLogoGit, RevealLogoHTML, RevealLogoJS, RevealLogoNodeJS, RevealLogoReact, RevealLogoSQL } from './RevealLogo'
import Reveal from './Reveal'

const TechnicalSkills = ({techRef}) => {
  return (
    <div className="technical-skills-container" ref={techRef} >
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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" className="vsc-image"/>
                </RevealLogo>
            </div>
            <div className="two">
                <RevealLogoGit>
                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" className="git-image" />
                </RevealLogoGit>
            </div>
            <div className="three">
                <RevealLogoReact>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" className="react-image"/>
                </RevealLogoReact>
            </div>
            <div className="four">
                <RevealLogoJS>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" className="java-image"/>
                </RevealLogoJS>
            </div>
            <div className="five">
                <RevealLogoCSS>
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" className="css-image"/>
                </RevealLogoCSS>
            </div>
            <div className="six">
                <RevealLogoNodeJS>
                    <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" className="nodejs-image"/>
                </RevealLogoNodeJS>
            </div>
            <div className="seven">
                <RevealLogoHTML>
                    <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" className="html-image"/>
                </RevealLogoHTML>
            </div>
            <div className="eight">
                <RevealLogoSQL>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png" className="postgreSQL-image"/>
                </RevealLogoSQL>
            </div>
        </div>
    </div>
  )
}

export default TechnicalSkills
