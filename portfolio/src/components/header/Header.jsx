import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Melbin Kurien</h1>
      <h5 className='text-light'>Student and a Part-Time React Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="me"/>
      </div>
      <a href="#contact"className='scroll__down'>ScrollDown</a>
      </div>
  
    </header>
  )
}

export default Header
