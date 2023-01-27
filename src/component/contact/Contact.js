// import React from 'react'  
import './Contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {FiLinkedin} from 'react-icons/fi'
import {IoLogoWhatsapp} from 'react-icons/io'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
function Contact() {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rqu1si5', 'template_auq2ril', form.current, 'qtKs-WoCX-C72snXX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className='contact__options'>
        
        <article className='contact_option'>
        <AiTwotoneMail className='contact__options-icon'/>
          <h4>Email</h4>
          <h5>aditya224496@gmail.com</h5>
          <a href="mailto:aditya224496@gmail.com">Send a Message</a>
        </article>
        
        <article className='contact_option'>
        <FiLinkedin className='contact__options-icon'/>
          <h4>Linkedin</h4>
          <h5>let's talk here</h5>
          <a href="https://www.linkedin.com/in/aditya-pratap-singh-2134571b7/">Send a Message</a>
        </article>
        
        <article className='contact_option'>
        <IoLogoWhatsapp className='contact__options-icon'/>
          <h4>Whatsapp</h4>
          <h5>9525193682</h5>
          <a href="https://api.whatsapp.com?phone=+919525193682">Send a Message</a>
        </article>
      
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>


      
    </section>
  )
}

export default Contact
