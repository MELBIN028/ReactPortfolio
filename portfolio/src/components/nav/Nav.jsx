import React from 'react'
import './nav.css'
import {BiHomeCircle} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import{SiExpertsexchange} from 'react-icons/si'
import{RiServiceLine} from 'react-icons/ri'
import{MdContacts} from 'react-icons/md'
import { useState } from 'react' 
const Nav = () => {
  const [activeNav ,setActiveNave]=useState('#')
  return (
    <nav>
      <a href="#" className={activeNav=='#' ? 'active':'' }><BiHomeCircle/></a>
      <a href="#about" onClick={()=>setActiveNave('#about') }className={activeNav=='#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNave('#experience') }className={activeNav=='#experience' ? 'active':''}><SiExpertsexchange/></a>
      <a href="#services" onClick={()=>setActiveNave('#services') }className={activeNav=='#services' ? 'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNave('#contact') }className={activeNav=='#contact' ? 'active':''}><MdContacts/></a>
    </nav>
  )
}

export default Nav
