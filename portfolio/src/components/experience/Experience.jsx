import React from 'react'
import './experience.css'
import{HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section  id='experience'>
      <h5>What skills I have ?</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>CSS</h4>
              <small className='text-light'>Advanced</small>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>JavaScript</h4> 
              <small className='text-light'>Advanced</small>
            </article>
          </div>
          
        </div>
        <div className='experience__backend'>
        <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>CSS</h4>
              <small className='text-light'>Advanced</small>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck/>
              <h4>JavaScript</h4> 
              <small className='text-light'>Advanced</small>
            </article>
        
          
        </div>          
          
          
          


        </div>

      </div>
    </section >
  )
}

export default Experience
