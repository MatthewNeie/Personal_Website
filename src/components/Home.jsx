import React from 'react'
import { useState , useRef } from 'react';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Sidebar from './Sidebar';
import Education from './Education';
import WorkExperience from './WorkExperience';
import { Work } from '@mui/icons-material';
import Contact from './Contact';

const Home = ({calRef, mechRef, fsRef, homeRef, contactRef}) => {

  const handleClickCalPoly = () => {
    calRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickMech = () => {
    mechRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickFS = () => {
    fsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [ slideIndex, setSlideIndex ] = useState(0)

  const styles = {
      transform: `translate(${slideIndex * -100}vw)`
  }

  const leftHandleClick = () => {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
  }

  const rightHandleClick = () => {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
  }

  return (
  <>
    <Sidebar homeRef={homeRef} contactRef={contactRef}/>
    <div className="home-container" ref = {homeRef} >
        <div className="home-body">
            <h1 className="home-name">Matthew Neie</h1>
            <p className="home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed luctus, lacus id tincidunt fringilla, sem mauris laoreet sapien, vitae porttitor quam risus et purus.
        Morbi eget varius nibh. In pretium ipsum ac pulvinar ullamcorper.
        Curabitur at dolor facilisis, varius mauris vitae, porta tellus.
        Integer posuere nisi ut felis semper lobortis.
        Cras iaculis nibh sit amet massa interdum, id tincidunt enim suscipit. Duis in ex neque.
        Mauris placerat sodales finibus. Proin risus libero, porta eu suscipit eu, mattis in mauris.
        Ut dignissim varius felis nec ultrices. In pretium ipsum ac pulvinar ullamcorper.
        Curabitur at dolor facilisis, varius mauris vitae, porta tellus.
        Integer posuere nisi ut felis semper lobortis.</p>

            <p className="home-quote">"I have not failed. I've found 10,000 ways that won't work."</p>
            <p className="home-quote-author">-Thomas Edison</p>
        </div>
    </div>
        <div className="slider-container">
        { slideIndex === 0 ? null :
            <button className="arrow-left" onClick={leftHandleClick}><ArrowLeftOutlinedIcon /></button>}
            <div className="slider-wrapper" style={styles}>
                <div className="slide-calpoly">
    
                    <div className="slider-info-container-calpoly">
                        <h1 className="slider-info-container-title">CALIFORNIA POLYTECHNIC STATE UNIVESIRY</h1>
                        <p className="slider-info-container-description">DEGREE: BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION</p>
                        <button className="slider-info-container-button" onClick={handleClickCalPoly} >DETAILS</button>
                    </div>
                    <div className="slider-quote-container-calpoly">
                  </div>
                </div>
                <div className="slide-mechanics-bank">
                    <div className="slider-info-container-mechanics-bank">
                        <h1 className="slider-info-container-title">MECHANICS BANK</h1>
                        <p className="slider-info-container-description">UNIVERSAL BANKER</p>
                        <button className="slider-info-container-button" onClick={handleClickMech} >DETAILS</button>
                    </div>
                    <div className="slider-quote-container-mechanics-bank">
                    </div>
                </div>
                <div className="slide-fullstack">
                    <div className="slider-info-container-fullstack">
                        <h1 className="slider-info-container-title-fullstack">FULLSTACK ACADEMY</h1>
                        <p className="slider-info-container-description">CERTIFICATE</p>
                        <button className="slider-info-container-button" onClick={handleClickFS} >DETAILS</button>
                    </div>
                    <div className="slider-right-container-fullstack">
                        
                    </div>
                </div>
            </div>
        { slideIndex === 2 ? null :
            <button className="arrow-right" onClick={rightHandleClick}><ArrowRightOutlinedIcon /></button>}
    </div>
    <Education calRef={calRef} />
    <WorkExperience mechRef={mechRef} fsRef={fsRef} />
    <Contact contactRef={contactRef} />
  </>
  )
}

export default Home;
