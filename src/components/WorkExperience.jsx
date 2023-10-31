import React from 'react'
import { useRef } from 'react';
import Reveal from './Reveal';

const WorkExperience = ({mechRef, fsRef}) => {


  return (
    <div className="work-experience-container">
        <Reveal>
        <div className="work-experience-mechanics-bank-container" ref = {mechRef}>
            <div className="work-experience-mechanics-bank-header">
                {/* <h2>Mechanics Bank</h2> */}
            </div>
            <div className="work-experience-mechanics-bank-body">
                <div className="work-experience-mechanics-bank-left">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/CalPoly_Seal.svg/640px-CalPoly_Seal.svg.png"></img> */}
                </div>
                <div className="work-experience-mechanics-bank-right">
                <Reveal>
                    <p>Universal Banker</p>
                </Reveal>
                <Reveal>
                    <p>Dec. 2019 - Jan 2023</p>
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
                <Reveal>
                    <p>San Luis Obispo, CA; Pismo Beach, CA</p>
                </Reveal>
                </div>
            </div>
        </div>
        </Reveal>
        <div className="work-experience-revasum-container">
            <Reveal>
            <div className="work-experience-revasum-header">
                {/* <h2>Revasum</h2> */}
            </div>
            <div className="work-experience-revasum-body">
                <div className="work-experience-revasum-left">
                <Reveal>
                    <p>Inventory Control Associate</p>
                </Reveal>
                <Reveal>
                    <p>Apr. 2019 - Oct. 2019</p>
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
                <Reveal>
                    <p>San Luis Obispo, CA</p>
                </Reveal>
                </div>
                <div className="work-experience-revasum-right">
                    {/* <img src="https://media2.newtimesslo.com/ntslo/imager/u/original/11083788/news5-1-0eb17f74226d5e4a.jpg"></img> */}
                </div>
            </div>
            </Reveal>
        </div>
        <div className="work-experience-marshalls-container">
            <Reveal>
            <div className="work-experience-marshalls-header">
                {/* <h2>Marshalls</h2> */}
            </div>
            <div className="work-experience-marshalls-body" ref={fsRef}>
                <div className="work-experience-marshalls-left">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/CalPoly_Seal.svg/640px-CalPoly_Seal.svg.png"></img> */}
                </div>
                <div className="work-experience-marshalls-right">
                <Reveal>
                    <p>Merchandise Associate</p>
                </Reveal>
                <Reveal>
                    <p>Oct. 2014 - Apr. 2016</p>
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
                <Reveal>
                    <p>Arroyo Grande, CA</p>
                </Reveal>
                </div>
            </div>
            </Reveal>
        </div>
        <div className="work-experience-doc-burnsteins-container">
            <Reveal>
            <div className="work-experience-doc-burnsteins-header">
                {/* <h2>Doc Burnsteins</h2> */}
            </div>
            <div className="work-experience-doc-burnsteins-body">
                <div className="work-experience-doc-burnsteins-left">
                    <Reveal>
                    <p>Parlor Specialist</p>
                    </Reveal>
                    <Reveal>
                    <p>Jun. 2010 - Jun. 2012</p>
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
                    <Reveal>
                    <p>Arroyo Grande, CA</p>
                    </Reveal>
                </div>
                <div className="work-experience-doc-burnsteins-right">
                    {/* <img src="https://media2.newtimesslo.com/ntslo/imager/u/original/11083788/news5-1-0eb17f74226d5e4a.jpg"></img> */}
                </div>
            </div>
            </Reveal>
        </div>
    </div>
  )
}

export default WorkExperience;
