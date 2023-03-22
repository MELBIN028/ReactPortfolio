import React from 'react'
import './footer.css'
import{AiFillFacebook} from 'react-icons/ai'
import{AiFillInstagram} from 'react-icons/ai'
import{AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Melbin Kurien</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        </ul>

        <div className='footer__socials'>
          <a href="www.facebook.com"><AiFillFacebook/></a>
          <a href="www.instagram.com"><AiFillInstagram/></a>
          <a href="www.linkdin.com"><AiFillLinkedin/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy;Melbin Kurien.All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
