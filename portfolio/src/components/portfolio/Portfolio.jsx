import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Works</h5>
    <h2>Portfolio</h2>

    <div className='.container portfolio__container'>
      <article className='portfolio__items'>
        <div className='portfolio__items-image'>
    
          <img src={IMG1} alt="img1" /> 
        </div>
        <h3> Sneaker-Heads E-Commerce Website</h3>
          <div className='portfolio__items-cta'>
          <a href="www.github.com" className='btn'>Github</a> 
          <a href="https://github.com/MELBIN028/nike-shoes.git" className='btn btn-primary'target="https://github.com/MELBIN028/nike-shoes.git" >Live Demo</a> 
          </div>
      </article>
      <article className='portfolio__items'>
        <div className='portfolio__items-image'>
        
          <img src={IMG2} alt="img2" /> 
        </div>
        <h3> Portfolio using ReactJs</h3>
          <div className='portfolio__items-cta'>
          <a href="www.github.com" className='btn'>Github</a> 
          <a href="https://github.com/MELBIN028/ReactPortfolio.git" className='btn btn-primary'target="https://github.com/MELBIN028/ReactPortfolio.git" >Live Demo</a> 
          </div>
      </article>


      
    </div>

    </section>  )
}

export default Portfolio
