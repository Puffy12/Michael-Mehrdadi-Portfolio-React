import React from 'react'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'



const Portfolio = () => {

    const textArray = ['P','o','r','t','f','o','l','i','o'];

    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
      return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}  strArray={textArray} idx={15}  />
                </h1>
                <h2>
                    Project One
                    <p>
                        I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                </h2>
                
                <h2>
                    Project Two
                    <p>
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my skills one design problem at a time. The knowledge I gain during each project has no price.
                    </p>
                </h2>

                <h2>
                    Project Three
                    <p>
                    If I need to define myself in one sentence that would be a family
                    person, gym enthusiast, a sports fanatic,
                    car enthusiast, and tech-obsessed!!!
                    </p>
                </h2>
                
                </div>

            </div>
            <Loader type="pacman" />
            </>
    )
  }
  
  export default Portfolio