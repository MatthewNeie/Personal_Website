import React from 'react'
import { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


const Slider = () => {

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
    <div className="slider-container">
        { slideIndex === 0 ? null :
            <button className="arrow-left" onClick={leftHandleClick}><ArrowLeftOutlinedIcon /></button>}
            <div className="slider-wrapper" style={styles}>
                <div className="slide-calpoly">
                    <div className="slider-info-container-calpoly">
                        <h1 className="slider-info-container-title">CALIFORNIA POLYTECHNIC STATE UNIVESIRY</h1>
                        <p className="slider-info-container-description">DEGREE: BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION</p>
                        <button className="slider-info-container-button">DETAILS</button>
                    </div>
                    <div className="slider-quote-container-calpoly">
                        <h2 className="learn-by-doing">"LEARN BY DOING"</h2>
                  </div>
                </div>
                <div className="slide-mechanics-bank">
                    <div className="slider-info-container-mechanics-bank">
                        <h1 className="slider-info-container-title">MECHANICS BANK</h1>
                        <p className="slider-info-container-description">UNIVERSAL BANKER</p>
                        <button className="slider-info-container-button">DETAILS</button>
                    </div>
                    <div className="slider-quote-container-mechanics-bank">
                        <h2 className="where-relationships-matter">"WHERE RELATIONSHIPS MATTER"</h2>
                    </div>
                </div>
                <div className="slide-fullstack">
                    <div className="slider-info-container-fullstack">
                        <h1 className="slider-info-container-title-fullstack">FULLSTACK ACADEMY</h1>
                        <p className="slider-info-container-description">CERTIFICATE</p>
                        <button className="slider-info-container-button">DETAILS</button>
                    </div>
                    <div className="slider-right-container-fullstack">
                        
                    </div>
                </div>
            </div>
        { slideIndex === 2 ? null :
            <button className="arrow-right" onClick={rightHandleClick}><ArrowRightOutlinedIcon /></button>}
    </div>
  </>
  )
}

export default Slider;
