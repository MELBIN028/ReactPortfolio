import React from 'react'
import './services.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer ! </h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='services'>
          <div className='service__head'>
            <h4>UI/UX Design</h4>
          </div>
          <ul className='service__list'>
            <li> <h4><BsBookmarkCheckFill className='service__list-icon'/>WireFrame</h4></li>
            <li><h4><BsBookmarkCheckFill className='service__list-icon' />Prototypes</h4></li>
            <li><h4><BsBookmarkCheckFill className='service__list-icon'/>Mockups</h4></li>
          </ul>  
        </article>

        <article className='services'>
          <div className='service__head'>
            <h4>Web-Development</h4>
          </div>
          <ul className='service__list'>
            <li> <h4><BsBookmarkCheckFill className='service__list-icon'/>HTML</h4></li>
            <li><h4><BsBookmarkCheckFill className='service__list-icon' />Css</h4></li>
            <li><h4><BsBookmarkCheckFill className='service__list-icon'/>Js</h4></li>
          </ul>  
        </article>

        <article className='services'>
          <div className='service__head'>
            <h4>Management</h4>
          </div>
          <ul className='service__list'>
            <li> <h5><BsBookmarkCheckFill className='service__list-icon'/>Delegatiion</h5></li>
            <li><h5><BsBookmarkCheckFill className='service__list-icon' />Administration</h5></li>

          </ul>  
        </article>
      </div>
    </section>
  )
}

export default Services
