import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import React from 'react'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass}  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}  />
            
          </h1>
          <h2>
          Hello there! I'm a spirited front-end developer eager to contribute my skills and passion to a dynamic IT company known for embracing the forefront of technology. 
          My goal? To dive into challenging projects that not only elevate my expertise but also make a meaningful impact.
          </h2>
          <h2 align="LEFT">
          Confidence paired with curiosity drives me forward. With every design challenge I encounter, my dedication to continuous improvement shines through. 
          The invaluable insights and experiences I gather from each endeavor are truly priceless to me.
          </h2>
          <h2>
          If I were to sum myself up in a few words, I'd describe myself as someone who deeply values family time, finds joy in hitting the gym regularly, 
          has a genuine passion for sports, appreciates the intricacies of cars, and is always eager to explore the latest in technology.
          </h2>
          <h2>
          Here's a snapshot of my skillset but not limited to:
          <br/>
          ●Programming Languages: Proficient in C++, Python, and JAVA.<br/>
          ●Web Development Expertise: Mastery in HTML, CSS, Javascript, and Node.js.<br/>
          ●Server & Framework: Hands-on experience with Express.js and SSH Powershell servers.<br/>
          ●Database & Framework: Familiarity with MongoDB, SpringBoot 4, and REST Api Controllers.<br/>
          ●Collaborative Spirit: As someone who thrives in team settings, I cherish collaborating with peers, friends, and classmates across diverse projects.<br/>
          ●Language Proficiency: Fluent in Japanese, encompassing reading, writing, and speaking.<br/>

          </h2>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
