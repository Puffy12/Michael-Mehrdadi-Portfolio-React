import React from 'react'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Carousel from "react-multi-carousel";
import { Container , Col , Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png"
import 'react-multi-carousel/lib/styles.css';

import LogoTitle from '../../assets/images/logo-s.png'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.
                    </h2>   
                    <div className="images-container">
                            <div className="image-box" key="1">
                                <img 
                                src={"../../assets/images/logo-s.png"}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">Title 1 </p>
                                    <h4 className="description">description</h4>
                                    <button
                                        className="btn">View</button>
                                </div>
                            </div>

                            <div className="image-box" key="1">
                                <img 
                                src={"../../assets/images/logo-s.png"}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">Title 1 </p>
                                    <h4 className="description">description</h4>
                                    <button
                                        className="btn">View</button>
                                </div>
                            </div>

                            <div className="image-box" key="1">
                                <img 
                                src={"../../assets/images/logo-s.png"}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">Title 1 </p>
                                    <h4 className="description">description</h4>
                                    <button
                                        className="btn">View</button>
                                </div>
                            </div>

                            <div className="image-box" key="1">
                                <img 
                                src={"../../assets/images/logo-s.png"}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">Title 1 </p>
                                    <h4 className="description">description</h4>
                                    <button
                                        className="btn">View</button>
                                </div>
                            </div>
                    </div>





                </div>

                <section className="skill" id="skills">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="skill-bx wow zoomIn">
                                    <h2>
                                        <AnimatedLetters letterClass={letterClass}  strArray={['S','k','i','l','l','s']} idx={15}  />
                                    </h2>
                                    
                                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                        <div className="item">
                                            <img src={meter1}/>
                                            <h5>Web Development</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter2}/>
                                            <h5> Software Engineer </h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3}/>
                                            <h5> Problem Solver </h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} />
                                            <h5> Computer Science Student </h5>
                                        </div>
                                    </Carousel>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>

           
            
        

            <img className="background-image-left" src={colorSharp} alt="Image" />
            <Loader type="pacman" />
            </>
    )
  }
  
  export default Portfolio


  /*
        <section className="skill" id="skills">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="skill-bx wow zoomIn">
                                    <h2>
                                        <AnimatedLetters letterClass={letterClass}  strArray={['S','k','i','l','l','s']} idx={15}  />
                                    </h2>
                                    
                                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                        <div className="item">
                                            <img src={meter1}/>
                                            <h5>Web Development</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter2}/>
                                            <h5> Software Engineer </h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3}/>
                                            <h5> Problem Solver </h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} />
                                            <h5> Computer Science Student </h5>
                                        </div>
                                    </Carousel>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  */