import React from 'react'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'



const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm('1', '1', form.current, '1')
    .then(
      (response) => {
        if (response.status === 200) {
          alert('Message successfully sent!');
          window.location.reload(false);
        } else {
          alert('Email Sever not active as this is not an my main site if you wish to contact me please :)');
        }
      },
      (error) => {
        console.error('Error sending the email:', error);
        alert('Email Sever not active as this is not an my main site if you wish to contact me please :)');
      }
    );

  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}  idx={15} />
          </h1>
          <h2>

          Please don't hesitate to reach out to me, whether you have a small project, 
          a larger endeavor, or any other inquiries. Use the form below to get in touch, and I'll be happy to assist you!
          </h2>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required> </textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Michael Mehrdadi,
          <br />
          United States,
          <br />
          Sacramento California, <br />
          95826 <br />
          <br />
          <span>michaelmehrdadi123@gmail.com</span>
        </div>
        
        <div className="map-wrap">
          <MapContainer center={[38.5816, -121.4944]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[38.5816, -121.4944]}>
              <Popup>Not Exactly where i live but close </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}




export default Contact

