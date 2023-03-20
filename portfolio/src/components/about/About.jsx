import React from 'react'
import './about.css'
import ME from '../../assets/me4.jpg'
import {FaAward} from 'react-icons/fa'
import{FaUserAlt} from 'react-icons/fa'
import{SiNounproject} from 'react-icons/si'
const About = () => {
  return (

    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"/>
           </div>
        </div>
        <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>  
            <h5>Experience</h5>
            <small>Fresher
            </small>
          </article>
          <article className='about__card'>
            <SiNounproject className='about__icon'/>  
            <h5>Projects</h5>
            <small>3 Projects + 1 Internship Project
            </small>
          </article>
          <article className='about__card'>
            <FaUserAlt className='about__icon'/>  
            <h5>Clients</h5>
            <small>No Clients yet
            </small>
          </article>
          <p>
            I am a fresher who have good skills over HTML,CSS,JS and React Js.  
          </p>
          </div>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
