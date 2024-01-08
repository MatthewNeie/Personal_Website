import React from 'react'
import { useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Projects = () => {

  const [ count, setCount ] = useState(0)

  const leftHandleClick = () => {
    setCount(count > 0 ? count - 1 : 9)
}

const rightHandleClick = () => {
    setCount(count < 9 ? count + 1 : 0)
}



  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1>
        <div className="projects-petstop-div">
          <div className="petstop-left">
            <h1><ArrowCircleLeftIcon onClick={() => {leftHandleClick()}}/> PetStop <ArrowCircleRightIcon onClick={() => {rightHandleClick()}}/></h1>
            {count !== 0 ? null : <img src="./src/images/petstop-image-1.png" className="petstop-image" /> }
            {count !== 1 ? null : <img src="./src/images/petstop-image-2.png" className="petstop-image" /> }
            {count !== 2 ? null : <img src="./src/images/petstop-image-3.png" className="petstop-image" /> }
            {count !== 3 ? null : <img src="./src/images/petstop-image-4.png" className="petstop-image" /> }
            {count !== 4 ? null : <img src="./src/images/petstop-image-5.png" className="petstop-image" /> }
            {count !== 5 ? null : <img src="./src/images/petstop-image-6.png" className="petstop-image" /> }
            {count !== 6 ? null : <img src="./src/images/petstop-image-7.png" className="petstop-image" /> }
            {count !== 7 ? null : <img src="./src/images/petstop-image-8.png" className="petstop-image" /> }
            {count !== 8 ? null : <img src="./src/images/petstop-image-9.png" className="petstop-image" /> }
            {count !== 9 ? null : <img src="./src/images/petstop-image-10.png" className="petstop-image" /> }
          </div>
          <div className="petstop-right">
            <div className="petstop-right-header">
              <h1>FullStack Web Application</h1>
            </div>
            <div className="petstop-right-details">
              <div className="petstop-right-front-end">
                  <div className="petstop-right-title">
                    <h1>Front-end</h1>
                  </div>
                  <div className="petstop-right-desc">
                    <ul>
                      <li>Guest access and user access</li>
                      <li>Sort and filter products by price, name, and category</li>
                      <li>Add, edit, delete products</li>
                      <li>Add, edit, remove items from cart</li>
                      <li>Display reviews for individual products</li>
                      <li>Profile page with user information</li>
                      <li>Administrator access</li>
                    </ul>
                  </div>
              </div>
              <div className="petstop-right-back-end">
                  <div className="petstop-right-title">
                    <h1>Back-end</h1>
                  </div>
                  <div className="petstop-right-desc">
                    <ul>
                      <li>Create tables in PostgreSQL</li>
                      <li>Insert, seed data</li>
                      <li>Secure Bcrypt hashed passwords</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Projects;
