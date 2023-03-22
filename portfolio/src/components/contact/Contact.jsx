import React from 'react'
import './contact.css'
import{MdAttachEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'



const Contact = () => {


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdAttachEmail className='contact__option-icon'/>  
            <h4>Email</h4>
            <h5>melbinkurien2@gmail.com</h5>
            <a href="mailto:melbinkurien2@gmail.com"> Send a mail...</a> </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon'/>  
            <h4>LinkdIn</h4>
            <h5>Melbin Kurien</h5>
            <a href="https://www.linkedin.com/in/melbin-kurien-768b2a1b4/">Send a message</a></article>
          <article className='contact__option'>
            < IoLogoWhatsapp className='contact__option-icon'/>  
            <h4>Whatsapp</h4>
            <h5>+91 9871598552</h5>
            <a href="https://wa.me/9871598552">Ping me up</a></article>
        </div>
        <form action=''>
             <input type="text"  name='name' placeholder='Your name please?' required/>
             <input type="email" name='email'placeholder='Email'required/>
             <textarea name="message" id='' cols="30" rows="7" placeholder='Message' required></textarea>       
            <button type='submit'className='btn btn-primary' >Send Message</button>   
               </form>
      </div>
    </section>
  )
}

export default Contact
