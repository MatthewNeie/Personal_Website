import React from 'react'
import { useRef } from 'react';
import Reveal from './Reveal';

const Education = ({calRef}) => {
  return (
    <div className="education-container">
        <Reveal>
        <div className="education-calpoly-container" ref={calRef}>
            {/* <div className="education-calpoly-header">
                <h2>California Polytechnic State University, San Luis Obispo, CA</h2>
            </div> */}
            <div className="education-calpoly-body">
                <div className="education-calpoly-left">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/CalPoly_Seal.svg/640px-CalPoly_Seal.svg.png"></img> */}
                </div>
                <div className="education-calpoly-right">
                <Reveal>
                    <p>Bachelor of Science in Business Administration</p>
                </Reveal>
                <Reveal>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed luctus, lacus id tincidunt fringilla, sem mauris laoreet sapien, vitae porttitor quam risus et purus.
                        Morbi eget varius nibh. In pretium ipsum ac pulvinar ullamcorper.
                        Curabitur at dolor facilisis, varius mauris vitae, porta tellus.
                        Integer posuere nisi ut felis semper lobortis.
                        Cras iaculis nibh sit amet massa interdum, id tincidunt enim suscipit. Duis in ex neque.
                        Mauris placerat sodales finibus. Proin risus libero, porta eu suscipit eu, mattis in mauris.
                        Ut dignissim varius felis nec ultrices. In pretium ipsum ac pulvinar ullamcorper.
                        Curabitur at dolor facilisis, varius mauris vitae, porta tellus.
                        Integer posuere nisi ut felis semper lobortis.</p>
                </Reveal>
                </div>
            </div>
        </div>
        </Reveal>
        <div className="education-aghs-container">
            {/* <div className="education-aghs-header">
                <h2>Arroyo Grande High School</h2>
            </div> */}
            <Reveal>
            <div className="education-aghs-body">
                <div className="education-aghs-left">
                <Reveal>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed luctus, lacus id tincidunt fringilla, sem mauris laoreet sapien, vitae porttitor quam risus et purus.
                        Morbi eget varius nibh. In pretium ipsum ac pulvinar ullamcorper.
                        Curabitur at dolor facilisis, varius mauris vitae, porta tellus.
                        Integer posuere nisi ut felis semper lobortis.
                        Cras iaculis nibh sit amet massa interdum, id tincidunt enim suscipit. Duis in ex neque.
                        Mauris placerat sodales finibus. Proin risus libero, porta eu suscipit eu, mattis in mauris.
                        Ut dignissim varius felis nec ultrices. In pretium ipsum ac pulvinar ullamcorper.
                        Curabitur at dolor facilisis, varius mauris vitae, porta tellus.
                        Integer posuere nisi ut felis semper lobortis.</p>
                </Reveal>
                </div>
                <div className="education-aghs-right">
                    {/* <img src="https://media2.newtimesslo.com/ntslo/imager/u/original/11083788/news5-1-0eb17f74226d5e4a.jpg"></img> */}
                </div>
            </div>
            </Reveal>
        </div>
    </div>
  )
}

export default Education;
