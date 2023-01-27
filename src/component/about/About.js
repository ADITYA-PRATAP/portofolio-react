import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/lk.JPG'
import {GrCertificate} from 'react-icons/gr'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      <div className='about__me'>
        <div className='about_me-image'>
          <img src={ME}  className='imge' alt="About"/>
        </div>
      </div>
      
      <div className='about__content'>
        <div className="about__cards">
        <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3 Month </small>
          </article>

          <article className='about__card'>
          <FiUser className='about__icon'/>
          <h5>Happy clients</h5>
          <small>5+</small>
          </article>

          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>5+</small>
          </article>
          <article className='about__card'>
          <GrCertificate className='about__icon'/>
          <h5>Certification</h5>
          <small>10+</small>
          </article>
          </div>
          <p>
          <br></br>
          Computer Science is a science of abstraction -creating the right model for a problem and devising the appropriate mechanizable techniques to solve it.
          </p>
          <br></br>
          <a href='#contact' className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
      

    </section>
  )
}

export default About
