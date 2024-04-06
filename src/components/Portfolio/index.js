import React from 'react'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png"
import 'react-multi-carousel/lib/styles.css';
import ReactPortfolioImage from '../../assets/images/react-portfolio.png';
import ReactGradingAssistantImage from '../../assets/images/gradeassistant.png';
import Powersearch from '../../assets/images/powersearch.png';
import portfolio from '../../assets/images/portfolio.png';
import Cplusplus from '../../assets/images/cplusplus.png';
import { Link } from 'react-router-dom';


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
                    <br/> <br/>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={textArray} idx={15} />
                    </h1>
                    <h2> 
                    A collection of projects and programs that I'm genuinely proud of and happy to share.
                    </h2>  
                    <br/> <br/>
                    <h2>
                    Each of these projects has taught me a lot, and I'm excited to keep adding more to this portfolio 
                    as I learn and grow. Reflecting on these endeavors reminds me of the journey so far, 
                    and I'm eager to see where the next steps will lead me. With each addition, 
                    I aim to capture both the lessons learned and the passion driving me forward.
                    </h2> 
                    <br/>

                    <div className="images-container">

                            <div className="image-box" key="1">

                                <img src={portfolio} className="portfolio-image" alt="portfolio" />
                                <div className="content">
                                    <p className="title">Personal Portfolio</p>
                                    <h4 className="description">This is not my main site as it was meant for learning if you wish to <br/>see my main site<br/> check the link below :)</h4>
                                    <Link to="https://michael-mehrdadi-personal-portfolio.vercel.app/" target="_blank">
                                        <button className="btn">View</button>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="image-box" key="1">

                                <img src={Powersearch} className="portfolio-image" alt="portfolio" />
                                <div className="content">
                                    <p className="title">Power Search </p>
                                    <h4 className="description">A website designed for teachers at ARC ,<br/>enabling them to <br/> seamlessly view, edit, download, 
                                    and delete <br/>files they've uploaded to <br/>the PowerShell server. </h4>
                                    <Link to="https://github.com/design-hub-arc/DH-Power-Search" target="_blank">
                                        <button className="btn">View</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="image-box" key="1">

                                <img src={ReactGradingAssistantImage} className="portfolio-image" alt="portfolio" />
                                <div className="content">
                                    <p className="title">Grading Assistant </p>
                                    <h4 className="description">A project made two <br/> friends and I that <br/> simulated a teacher <br/>to student grading enviorment  </h4>
                                    <Link to="https://github.com/Puffy12/Grading-Assistant" target="_blank">
                                        <button className="btn">View</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-box" key="1">

                                <img src={ReactPortfolioImage} className="portfolio-image" alt="portfolio" />
                                <div className="content">
                                    <p className="title">React Portfolio </p>
                                    <h4 className="description"> It might seem ironic to include one's portfolio <br/>page within their own portfolio, 
                                    but this journey has certainly been an <br/>major learning <br/>experience.</h4>
                                    <Link to="https://github.com/Puffy12/Michael-Mehrdadi-Portfolio-React" target="_blank">
                                        <button className="btn">View</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="image-box" key="1">

                                <img src={Cplusplus} className="portfolio-image" alt="portfolio" />
                                <div className="content">
                                    <p className="title"> C++ Problems </p>
                                    <h4 className="description"> This compilation is a <br/> go-to resource where I gather and track various dynamic programming problems I come across online. 
                                    You'll find <br/>solutions are written <br/> in C++. </h4>
                                    <Link to="https://github.com/Puffy12/Coding-Problems-C-Plus-Plus" target="_blank">
                                        <button className="btn">View</button>
                                    </Link>
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
                                            <img src={meter2} alt='jsx-a11y/alt-text'/>
                                            <h5>Web Development</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3} alt='jsx-a11y/alt-text'/>
                                            <h5> Software Engineer </h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3} alt='jsx-a11y/alt-text'/>
                                            <h5> Problem Solver </h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} alt='jsx-a11y/alt-text' />
                                            <h5> Computer Science Student </h5>
                                        </div>
                                    </Carousel>

                                    <h3> This is not my main site as it was meant for learning if you wish to see my main site check the link below :)</h3>
                                    <Link to="https://michael-mehrdadi-personal-portfolio.vercel.app/" className="flat-button" target="_blank">
                                        Main Portfolio 
                                    </Link>  

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

      
            </div>

           
            
        

            <img className="background-image-left" src={colorSharp} alt='jsx-a11y/alt-text' />
            <Loader type="pacman" />
            </>
    )
  }
  
  export default Portfolio

