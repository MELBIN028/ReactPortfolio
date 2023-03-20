import React from 'react'
import{AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https//linkdin.com" target="_blank"><AiFillLinkedin/></a>
      <a href="https//github.com" target="_blank"><AiFillGithub/></a>
      <a href="https//instagram.com" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
